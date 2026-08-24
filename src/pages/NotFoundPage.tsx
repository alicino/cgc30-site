import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SUGGESTIONS = [
  { label: 'Sobre o Capítulo', to: '/sobre' },
  { label: 'Central de Materiais', to: '/downloads' },
  { label: 'Artigos', to: '/artigos' },
  { label: 'Calendário', to: '/calendario' },
];

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
          <Compass className="h-8 w-8" />
        </div>

        <p className="font-playfair text-7xl md:text-8xl font-bold text-primary/20 leading-none mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Parece que você se perdeu no caminho
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mb-10">
          A página que você procura não existe ou foi movida. Assim como nas nossas jornadas dentro da Ordem
          DeMolay, às vezes é preciso voltar alguns passos para retomar o rumo certo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" /> Voltar para o Início
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4" /> Página Anterior
          </Button>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">Ou explore outras páginas do site:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SUGGESTIONS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="text-sm font-medium px-4 py-2 rounded-full border bg-muted/50 hover:bg-accent hover:text-primary transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
