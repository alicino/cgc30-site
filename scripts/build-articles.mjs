#!/usr/bin/env node
/**
 * build-articles.mjs
 * Lê todos os arquivos .md de src/content/artigos/,
 * parseia frontmatter e converte Markdown para HTML,
 * e gera src/generated/articles-data.ts
 *
 * Sem dependências externas — usa apenas Node.js built-ins.
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const contentDir = join(root, 'src', 'content', 'artigos');
const generatedDir = join(root, 'src', 'generated');

// ─── Frontmatter parser ───────────────────────────────────────────────────────
// Suporta strings (com ou sem aspas), arrays simples e valores sem aspas
function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) throw new Error('Frontmatter não encontrado');

  const yamlBlock = match[1];
  const body = match[2];
  const data = {};

  for (const line of yamlBlock.split('\n')) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (!kv) continue;
    const key = kv[1];
    let val = kv[2].trim();

    // Array: ["a", "b"] ou ['a', 'b']
    if (val.startsWith('[')) {
      data[key] = val
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^["']|["']$/g, ''));
      continue;
    }
    // Remove aspas externas de strings
    val = val.replace(/^["']|["']$/g, '');
    data[key] = val;
  }

  return { data, body };
}

// ─── Markdown → HTML converter ────────────────────────────────────────────────
// Suporta: h2/h3, parágrafos, bold, italic, blockquotes, listas não-ordenadas
function markdownToHtml(md) {
  // Normaliza quebras de linha
  let text = md.replace(/\r\n/g, '\n').trim();

  // Divide em blocos separados por linhas em branco
  const blocks = text.split(/\n{2,}/);
  const html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';

    // Bloco de blockquote (linhas começando com >)
    if (block.startsWith('>')) {
      const lines = block
        .split('\n')
        .map(l => l.replace(/^>\s?/, '').trim())
        .filter(Boolean);

      // Separa a última linha se for atribuição (— ...)
      const lastLine = lines[lines.length - 1];
      const isAttribution = lastLine.startsWith('—') || lastLine.startsWith('-');

      if (isAttribution && lines.length > 1) {
        const quoteText = inlineToHtml(lines.slice(0, -1).join(' '));
        const attr = inlineToHtml(lastLine);
        return `<blockquote><p>${quoteText}</p><footer>${attr}</footer></blockquote>`;
      }
      return `<blockquote><p>${inlineToHtml(lines.join(' '))}</p></blockquote>`;
    }

    // Lista não-ordenada
    if (/^[-*]\s/.test(block)) {
      const items = block
        .split('\n')
        .filter(l => /^[-*]\s/.test(l.trim()))
        .map(l => `<li>${inlineToHtml(l.replace(/^[-*]\s/, '').trim())}</li>`);
      return `<ul>${items.join('')}</ul>`;
    }

    // Headings
    const h2 = block.match(/^##\s+(.+)$/);
    if (h2) return `<h2>${inlineToHtml(h2[1])}</h2>`;

    const h3 = block.match(/^###\s+(.+)$/);
    if (h3) return `<h3>${inlineToHtml(h3[1])}</h3>`;

    const h1 = block.match(/^#\s+(.+)$/);
    if (h1) return `<h1>${inlineToHtml(h1[1])}</h1>`;

    // Parágrafo padrão (junta linhas do bloco)
    const para = block.split('\n').map(l => l.trim()).join(' ');
    return `<p>${inlineToHtml(para)}</p>`;
  });

  return html.filter(Boolean).join('\n');
}

// Converte marcações inline: **bold**, *italic*, `code`
function inlineToHtml(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

// ─── Lê e processa os arquivos .md ───────────────────────────────────────────
if (!existsSync(generatedDir)) mkdirSync(generatedDir, { recursive: true });

const files = readdirSync(contentDir)
  .filter(f => f.endsWith('.md'))
  .sort(); // ordem alfabética; pode ser reordenada por data depois

const articles = files.map((file, index) => {
  const raw = readFileSync(join(contentDir, file), 'utf-8');
  const { data, body } = parseFrontmatter(raw);
  const contentHtml = markdownToHtml(body);

  return {
    id: index + 1,
    slug: data.slug || file.replace('.md', ''),
    title: data.title,
    author: data.author,
    date: data.date,
    summary: data.summary,
    tags: Array.isArray(data.tags) ? data.tags : [],
    contentHtml,
  };
});

// Ordena por data (mais recentes primeiro) — compara as strings de data
// Formato: "DD Mês, AAAA" ex: "15 Mai, 2024"
const MONTH_ORDER = {
  jan: 1, fev: 2, mar: 3, abr: 4, mai: 5, jun: 6,
  jul: 7, ago: 8, set: 9, out: 10, nov: 11, dez: 12,
};
function parseDatePt(str) {
  // Formato: "15 Mai, 2024"
  const m = str.match(/^(\d+)\s+(\w+),?\s+(\d{4})$/);
  if (!m) return new Date(0);
  const month = MONTH_ORDER[m[2].toLowerCase().slice(0, 3)] || 0;
  return new Date(Number(m[3]), month - 1, Number(m[1]));
}
articles.sort((a, b) => parseDatePt(b.date) - parseDatePt(a.date));

// Reindexar após ordenação
articles.forEach((a, i) => { a.id = i + 1; });

// ─── Gera o arquivo TypeScript ────────────────────────────────────────────────
const output = `// AUTO-GERADO — não edite manualmente.
// Fonte: src/content/artigos/*.md
// Para regenerar: node scripts/build-articles.mjs

export interface Article {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  tags: string[];
  contentHtml: string;
}

export const ARTICLES: Article[] = ${JSON.stringify(articles, null, 2)};

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}
`;

writeFileSync(join(generatedDir, 'articles-data.ts'), output, 'utf-8');
console.log(`✓ articles-data.ts gerado com ${articles.length} artigo(s):`);
articles.forEach(a => console.log(`  - [${a.date}] "${a.title}" — ${a.author}`));
