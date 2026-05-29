import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar as CalendarIcon, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ARTICLES, getArticleBySlug } from '@/generated/articles-data';

export function ArtigoPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/artigos" replace />;
  }

  // Artigos relacionados: outros artigos, exceto o atual (máx. 2)
  const related = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">

        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" className="p-0 text-muted-foreground hover:text-primary flex items-center gap-2" asChild>
            <Link to="/artigos">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Artigos
            </Link>
          </Button>
        </div>

        {/* Cabeçalho */}
        <header className="mb-10">
          {article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs font-semibold uppercase tracking-wider">
                  <Tag className="h-3 w-3 mr-1" />{tag}
                </Badge>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4" />
              {article.date}
            </span>
          </div>
          <Separator className="mt-6" />
        </header>

        {/* Corpo do artigo — HTML gerado pelo build script */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Rodapé do artigo */}
        <Separator className="mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{article.author}</p>
              <p className="text-xs text-muted-foreground">Membro do Capítulo Grande Campinas nº 30</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/artigos">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ver todos os artigos
            </Link>
          </Button>
        </div>

        {/* Artigos relacionados */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-playfair font-bold mb-6">Outros artigos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map(rel => (
                <Link
                  key={rel.slug}
                  to={`/artigos/${rel.slug}`}
                  className="group block p-5 border rounded-xl bg-card/50 hover:shadow-md hover:border-primary/40 transition-all border-t-4 border-t-primary"
                >
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" /> {rel.date}
                  </p>
                  <p className="font-playfair font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                    {rel.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{rel.author}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
