import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, CalendarCheck, MessagesSquare, ClipboardCheck, Vote, Handshake, CircleCheck, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ETAPAS = [
  {
    icon: UserCheck,
    title: 'Indicação responsável',
    desc: 'Um membro apresenta o candidato ao Capítulo.',
    items: ['Perfil do candidato', 'Vontade livre e consciente', 'Afinidade com os valores', 'Guia do Candidato', 'Prévia interna', 'Ficha de indicação'],
  },
  {
    icon: CalendarCheck,
    title: 'Organização da entrevista',
    desc: 'A comissão de sindicância é formada e o encontro é agendado.',
    items: ['Formação da Comissão', 'Participação do Conselho Consultivo', 'Contato com a família', 'Agendamento', 'Definição do local', 'Preparação dos sindicantes'],
  },
  {
    icon: MessagesSquare,
    title: 'Realização da entrevista',
    desc: 'Uma conversa aberta com o candidato e seus pais ou responsáveis.',
    items: ['Acolhimento', 'Apresentação da Ordem', 'Diálogo com o candidato', 'Questionário de sindicância', 'Conversa com os pais', 'Esclarecimento de dúvidas', 'Observação e escuta'],
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliação responsável',
    desc: 'A comissão analisa o que foi observado e produz seu relatório.',
    items: ['Análise das informações', 'Critérios institucionais', 'Ausência de preconceitos', 'Situações impeditivas', 'Deliberação da Comissão', 'Relatório de sindicância'],
  },
  {
    icon: Vote,
    title: 'Decisão do Capítulo',
    desc: 'O relatório é apresentado e os membros votam.',
    items: ['Apresentação do relatório', 'Escrutínio secreto', 'Liberdade de voto'],
  },
  {
    icon: Handshake,
    title: 'Após a decisão',
    desc: 'O resultado é comunicado com respeito, qualquer que seja ele.',
    items: ['Comunicação do resultado', 'Orientação do candidato', 'Preparação para a iniciação', 'Acompanhamento pelo iniciante', 'Integração ao Capítulo'],
  },
];

const PRINCIPIOS = ['Conhecer', 'Orientar', 'Avaliar', 'Acolher'];

export function AdmissaoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-primary mb-4">Processo de Admissão</p>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Sindicância <span className="text-primary">Admissional</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Entrar para a Ordem DeMolay é uma decisão tomada em conjunto — pelo candidato, por sua família e pelo Capítulo.
            A sindicância é a conversa cuidadosa que antecede essa escolha, conduzida em seis etapas.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {PRINCIPIOS.map((p) => (
              <span key={p} className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">{p}</span>
            ))}
          </div>
        </div>

        {/* Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ETAPAS.map((etapa, i) => (
            <div key={etapa.title} className="relative p-6 rounded-2xl bg-muted/50 border flex flex-col gap-4 hover:bg-accent transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <etapa.icon className="h-5 w-5" />
                </div>
                <span className="font-playfair text-4xl font-bold text-primary/20 leading-none">{i + 1}</span>
              </div>
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold leading-snug">{etapa.title}</h2>
                <p className="text-sm text-muted-foreground">{etapa.desc}</p>
              </div>
              <ul className="space-y-1.5 pt-2 border-t">
                {etapa.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CircleCheck className="h-3.5 w-3.5 shrink-0 mt-1 text-primary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resultado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-8 rounded-2xl border bg-muted/50 space-y-4">
            <div className="flex items-center gap-3">
              <CircleCheck className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-playfair font-bold">Se aprovado</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              O candidato é comunicado, orientado sobre o que vem a seguir e preparado para a iniciação,
              acompanhado por um membro do Capítulo até sua plena integração.
            </p>
          </div>
          <div className="p-8 rounded-2xl border bg-muted/50 space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-playfair font-bold">Se não aprovado</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              A comunicação é respeitosa e reservada. O sigilo institucional é preservado, sem qualquer
              exposição do candidato — a dignidade de quem se apresentou vem sempre em primeiro lugar.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-muted rounded-3xl p-12 md:p-20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Quer conhecer o Capítulo?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jovens de 12 a 21 anos podem ser indicados a qualquer momento. Fale conosco para tirar dúvidas
            sobre a Ordem DeMolay e sobre o processo de admissão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:contato@cgc30.com">
                Entrar em contato <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/sobre">Sobre a Ordem</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
