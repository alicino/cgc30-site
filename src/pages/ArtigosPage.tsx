import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '@/generated/articles-data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, User, ArrowRight, Tag } from 'lucide-react';

const MONTHS: Record<string, number> = {
  jan: 0, fev: 1, feb: 1, mar: 2, abr: 3, apr: 3, mai: 4, may: 4, jun: 5,
  jul: 6, ago: 7, aug: 7, set: 8, sep: 8, out: 9, oct: 9, nov: 10, dez: 11, dec: 11,
};

function parseArticleDate(date: string) {
  const match = date.match(/(\d{1,2})\s+([A-Za-zçÇ]+),?\s+(\d{4})/);
  if (!match) return 0;
  const [, day, monthRaw, year] = match;
  const month = MONTHS[monthRaw.toLowerCase()] ?? 0;
  return new Date(Number(year), month, Number(day)).getTime();
}

export function ArtigosPage() {
  const sortedArticles = [...ARTICLES].sort(
    (a, b) => parseArticleDate(b.date) - parseArticleDate(a.date)
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Reflexões e Conhecimento</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Compartilhando sabedoria sobre liderança, história da Ordem DeMolay e a aplicação prática das nossas virtudes.
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mt-2">
            Se deseja ter o seu artigo incluído aqui, escreva para nós pelo{' '}
            <a
              href="mailto:contato@cgc30.com"
              className="text-primary font-medium underline underline-offset-4 hover:text-primary/80"
            >
              email de contato
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <Card key={article.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {article.author}</span>
                </div>
                <CardTitle className="leading-tight hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                  {article.summary}
                </p>
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {article.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0 uppercase tracking-wide font-medium">
                        <Tag className="h-2.5 w-2.5 mr-1" />{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 font-bold flex gap-2" asChild>
                  <Link to={`/artigos/${article.slug}`}>
                    Ler artigo completo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
