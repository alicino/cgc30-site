import React from 'react';
import { Shield, Target, Heart, Eye, Users, Bookmark, Star } from 'lucide-react';
const VIRTUES = [
  { name: 'Amor Filial', icon: Heart, desc: 'O amor e respeito incondicional pelos pais.' },
  { name: 'Reverência', icon: Star, desc: 'O respeito pelas coisas sagradas e crenças alheias.' },
  { name: 'Cortesia', icon: Users, desc: 'A educação e o bom trato com todas as pessoas.' },
  { name: 'Companheirismo', icon: Shield, desc: 'A amizade leal entre os irmãos de ordem.' },
  { name: 'Fidelidade', icon: Bookmark, desc: 'Ser fiel a si mesmo, aos seus ideais e à ordem.' },
  { name: 'Pureza', icon: Eye, desc: 'Pureza de pensamento, palavra e ação.' },
  { name: 'Patriotismo', icon: Target, desc: 'O amor e a dedicação à nossa pátria.' },
];
export function SobrePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold">Liderança, <br /><span className="text-primary">Virtude e União</span></h1>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Ordem DeMolay foi fundada em 1919 por Frank S. Land em Kansas City. Desde então, tem sido a maior organização juvenil 
                do mundo ligada à Maçonaria, focada no desenvolvimento de caráter para jovens do sexo masculino.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                O <strong>Capítulo Grande Campinas nº 30</strong> é uma unidade vibrante desta fraternidade, servindo a juventude da região 
                de Campinas através de atividades ritualísticas, filantrópicas e de liderança. Aqui, aprendemos que a maior vitória é o autoconhecimento.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800"
                alt="Jovens em reunião"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl text-primary-foreground hidden md:block">
              <p className="text-4xl font-bold font-playfair">1919</p>
              <p className="text-sm opacity-80 uppercase tracking-widest font-medium">Fundação Mundial</p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">As 7 Virtudes Cardeais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIRTUES.map((v) => (
              <div key={v.name} className="p-6 rounded-2xl bg-muted/50 border space-y-3 hover:bg-accent transition-colors">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center bg-muted rounded-3xl p-12 md:p-20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Corpo de Liderança</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nosso capítulo é guiado por uma diretoria juvenil eleita semestralmente e apoiado por um Conselho Consultivo de Maçons dedicados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { role: 'Mestre Conselheiro', img: '1' },
              { role: '1º Conselheiro', img: '2' },
              { role: '2º Conselheiro', img: '3' },
              { role: 'Presidente do Conselho', img: '4' }
            ].map((leader, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-background shadow-lg grayscale hover:grayscale-0 transition-all">
                  <img src={`https://i.pravatar.cc/300?img=${i+15}`} alt={leader.role} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{leader.role}</h4>
                  <p className="text-sm text-muted-foreground">Gestão 2024.1</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}