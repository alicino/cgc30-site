import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Image as ImageIcon, Download, Heart, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
const FEATURES = [
  { icon: ImageIcon, title: 'Atividades', desc: 'Registros das nossas cerimônias e eventos.', link: '/galeria', color: 'bg-blue-500/10 text-blue-600' },
  { icon: Download, title: 'Materiais', desc: 'Manuais e documentos para membros.', link: '/downloads', color: 'bg-amber-500/10 text-amber-600' },
  { icon: Heart, title: 'Virtudes', desc: 'Conheça os pilares da nossa ordem.', link: '/sobre', color: 'bg-emerald-500/10 text-emerald-600' },
  { icon: Calendar, title: 'Agenda', desc: 'Próximas reuniões e convocações.', link: '/calendario', color: 'bg-purple-500/10 text-purple-600' },
];
export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Shield className="h-4 w-4" />
              Capítulo Grande Campinas nº 30
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-display font-playfair font-bold text-foreground"
            >
              Formando os Líderes <br />
              <span className="text-secondary text-4xl md:text-6xl italic">do Amanhã</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-body text-xl max-w-2xl mx-auto"
            >
              A Ordem DeMolay prepara jovens de 12 a 21 anos para um futuro de liderança, 
              responsabilidade cidadã e amizade fraternal através de virtudes sólidas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Button size="lg" className="rounded-full gap-2 px-8" asChild>
                <Link to="/sobre">Saiba Mais <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link to="/artigos">Ler Artigos</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Highlights Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="group"
              >
                <Link to={item.link}>
                  <div className="bg-card p-8 rounded-2xl border hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col items-center text-center">
                    <div className={cn("p-4 rounded-xl mb-6 transition-transform group-hover:scale-110", item.color)}>
                      {React.createElement(item.icon, { className: "h-8 w-8" })}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">Faça Parte da Nossa Fraternidade</h2>
            <p className="text-primary-foreground/80 text-lg">
              Descubra como a Ordem DeMolay pode transformar a sua vida e a sua comunidade.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-10 font-bold" asChild>
              <Link to="/calendario">Conheça Nossas Reuniões</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}