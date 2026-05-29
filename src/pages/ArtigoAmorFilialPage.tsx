import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar as CalendarIcon, User, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function ArtigoAmorFilialPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">

        {/* Breadcrumb / Voltar */}
        <div className="mb-8">
          <Button variant="ghost" className="p-0 text-muted-foreground hover:text-primary flex items-center gap-2" asChild>
            <Link to="/artigos">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Artigos
            </Link>
          </Button>
        </div>

        {/* Cabeçalho do artigo */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              <PenTool className="h-3 w-3" />
              Virtudes DeMolay
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-6">
            O Poder do Amor Filial na Juventude
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              Ir. João Silva
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4" />
              15 Mai, 2024
            </span>
          </div>
          <Separator className="mt-6" />
        </header>

        {/* Corpo do artigo */}
        <article className="prose prose-lg max-w-none text-foreground space-y-6 leading-relaxed">

          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Explorando a primeira e principal virtude DeMolay e como ela molda o caráter dos nossos jovens em Campinas.
          </p>

          <p>
            Entre as sete virtudes cardeais que fundamentam a Ordem DeMolay, o <strong>Amor Filial</strong> ocupa o primeiro e mais
            nobre lugar. Não por acaso: é na relação com a família, especialmente com os pais, que o jovem encontra o solo fértil
            para cultivar todas as demais virtudes — a reverência, a cortesia, a comradeship, a fidelidade, a pureza, o patriotismo
            e a fraternidade entre companheiros.
          </p>

          <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-foreground">O que é o Amor Filial?</h2>

          <p>
            O Amor Filial não se resume à obediência cega ou à deferência formal. Trata-se de um vínculo profundo, construído
            sobre gratidão, respeito e reconhecimento. É o amor que o filho nutre pelo pai e pela mãe — aqueles que abriram os
            olhos do jovem para o mundo, que sacrificaram horas de sono, sonhos e conforto para que ele pudesse crescer com
            saúde, educação e valores.
          </p>

          <p>
            Frank S. Land, fundador da Ordem DeMolay, elegeu essa virtude como a primeira precisamente porque compreendeu que
            um jovem que honra seus pais carrega dentro de si a semente da honra. Quem aprende a ser grato em casa aprende a
            ser grato com a vida. Quem aprende a respeitar a autoridade dos pais desenvolve a capacidade de respeitar
            a si mesmo e aos outros.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
            <p className="text-lg font-medium text-foreground italic">
              "Um jovem que honra seus pais honra a si mesmo. Essa é a chave de ouro que abre as portas do caráter."
            </p>
            <footer className="mt-2 text-sm text-muted-foreground">— Frank S. Land, fundador da Ordem DeMolay</footer>
          </blockquote>

          <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-foreground">O Amor Filial na Prática Demoláica</h2>

          <p>
            No Capítulo Grande Campinas nº 30, o Amor Filial se manifesta de maneiras concretas ao longo do ano. Na cerimônia
            do Dia das Mães, os membros prestam homenagem pública às suas mães, reconhecendo o papel central que elas
            desempenham em suas jornadas. No Dia dos Pais, cartas são escritas, palavras são pronunciadas e, muitas vezes,
            lágrimas são derramadas — porque a verdade do amor filial toca algo muito profundo na alma humana.
          </p>

          <p>
            Mas o Amor Filial não é praticado apenas em datas comemorativas. Ele está presente no respeito com que um iniciático
            fala sobre seus pais durante as reuniões, na atitude de um membro que, ao retornar tarde de uma atividade do Capítulo,
            avisa a família para não preocupá-la, ou ainda na generosidade de reservar um tempo para estar presente em casa,
            mesmo com a agenda cheia de compromissos da Ordem.
          </p>

          <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-foreground">Os Desafios da Juventude Contemporânea</h2>

          <p>
            Viver o Amor Filial no século XXI não é trivial. Os jovens de hoje crescem em um mundo de estímulos constantes,
            redes sociais e pressões que competem pela atenção e pelo tempo. A relação com os pais, muitas vezes, é tensionada
            pela busca legítima da autonomia — algo saudável e necessário para o desenvolvimento —, mas que pode, sem o
            equilíbrio certo, se transformar em distância emocional.
          </p>

          <p>
            É aqui que a Ordem DeMolay oferece uma contribuição singular: ela convida o jovem a refletir sobre sua relação
            familiar não como uma imposição, mas como um valor. Ser demoláico é entender que independência e gratidão
            não são opostos. É possível crescer, questionar, construir a própria identidade e, ao mesmo tempo, honrar aqueles
            que tornaram essa jornada possível.
          </p>

          <h2 className="text-2xl font-playfair font-bold mt-10 mb-4 text-foreground">O Legado que Ficará</h2>

          <p>
            Quando um jovem abandona as fileiras ativas do Capítulo e segue sua vida como Membro de Mérito, ele carrega
            consigo muito mais do que medalhas, cargos ocupados ou rituais memorizados. Carrega a postura formada pela
            prática das virtudes. E o Amor Filial — com toda a sua riqueza de gratidão, lealdade e presença — é uma das
            marcas mais duradouras dessa formação.
          </p>

          <p>
            Que cada Irmão do Capítulo Grande Campinas nº 30 leve essa reflexão para além das paredes do Templo. Que o
            amor pelos pais seja praticado hoje, agora — em uma ligação, em uma palavra de apreço, em um abraço que
            talvez esteja atrasado.
          </p>

          <p>
            Porque o Amor Filial, quando genuíno, não é apenas a primeira virtude DeMolay. É o começo de tudo.
          </p>

        </article>

        {/* Rodapé do artigo */}
        <Separator className="mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Ir. João Silva</p>
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

      </div>
    </div>
  );
}
