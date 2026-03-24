import React from 'react';
import { ARTICLES } from '@/lib/mock-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar as CalendarIcon, User, PenTool } from 'lucide-react';
export function ArtigosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Reflexões e Conhecimento</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Compartilhando sabedoria sobre liderança, história da Ordem DeMolay e a aplicação prática das nossas virtudes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {article.author}</span>
                </div>
                <CardTitle className="leading-tight hover:text-primary transition-colors cursor-pointer group flex items-start gap-2">
                  <PenTool className="h-4 w-4 mt-1 text-primary hidden group-hover:block" />
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 font-bold flex gap-2" asChild>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">Ler artigo completo <ExternalLink className="h-4 w-4" /></a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}