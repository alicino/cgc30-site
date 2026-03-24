import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  return (
    <div className="flex flex-col">
      {/* Hero Section Cinematográfica */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image com Efeito de Escala e Parallax */}
        <motion.div 
          style={{ y: y1 }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600" 
            alt="Jovens em atividade de liderança"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Overlay para Legibilidade */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="text-center space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
                <Shield className="h-4 w-4 text-secondary" />
                Ordem DeMolay
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight"
            >
              Capítulo Grande <br className="hidden md:block" />
              Campinas <span className="text-secondary">nº 30</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-4xl text-white/90 italic font-playfair font-medium max-w-3xl mx-auto"
            >
              “Formando os Líderes do Amanhã”
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <Button size="lg" className="rounded-full gap-2 px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20" asChild>
                <Link to="/sobre">Nossa História <ChevronRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold bg-white/5 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary transition-all" asChild>
                <Link to="/calendario">Ver Agenda</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Role para explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
        </motion.div>
      </section>
      {/* Highlights Grid */}
      <section className="py-20 md:py-28 lg:py-32 bg-background relative z-30 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">Excelência e Fraternidade</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explorar o Capítulo Grande Campinas é descobrir um ambiente de crescimento, virtude e liderança compartilhada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="group"
              >
                <Link to={item.link}>
                  <div className="bg-card p-10 rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                    <div className={cn("p-5 rounded-2xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", item.color)}>
                      {React.createElement(item.icon, { className: "h-10 w-10" })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-playfair">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                    <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-widest gap-2">
                      Explorar <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section Revisitada */}
      <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white text-center relative overflow-hidden"
          >
            {/* Elementos Decorativos */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mt-32" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mb-48" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Junte-se a nós</span>
              <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">Mude sua história com a Ordem DeMolay</h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                Estamos de portas abertas para jovens que buscam ser a melhor versão de si mesmos e impactar positivamente o mundo.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold hover:scale-105 transition-transform" asChild>
                  <Link to="/sobre">Como Ingressar</Link>
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full px-12 h-16 text-lg font-bold text-white border border-white/20 hover:bg-white/10 transition-all" asChild>
                  <Link to="/artigos">Conheça Nossos Valores</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}