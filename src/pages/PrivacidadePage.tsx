import React from 'react';
import { ShieldCheck, Mail, MapPin, CalendarClock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SECTIONS: { question: string; content: React.ReactNode }[] = [
  {
    question: '1. Quem é o responsável pelos seus dados?',
    content: (
      <>
        <p>
          O <strong>Capítulo Grande Campinas nº 30</strong> da Ordem DeMolay, sediado em Campinas-SP, é o
          responsável (controlador, nos termos da Lei Geral de Proteção de Dados) pelo tratamento dos dados
          pessoais coletados por meio deste site institucional.
        </p>
        <p>
          Qualquer dúvida sobre esta política ou sobre o tratamento dos seus dados pode ser enviada para{' '}
          <a href="mailto:contato@cgc30.com" className="text-primary underline underline-offset-4 hover:text-primary/80">
            contato@cgc30.com
          </a>.
        </p>
      </>
    ),
  },
  {
    question: '2. Quais dados coletamos',
    content: (
      <>
        <p>
          Este site é, em sua essência, um portal informativo sobre o Capítulo, suas atividades e a Ordem
          DeMolay. Não possuímos formulários de cadastro on-line, e a coleta de dados pessoais é limitada a:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Contato voluntário:</strong> se você nos escreve pelo e-mail{' '}
            <span className="whitespace-nowrap">contato@cgc30.com</span>, tratamos os dados que você mesmo
            decide compartilhar na mensagem (nome, e-mail, conteúdo).
          </li>
          <li>
            <strong>Ficha de Indicação Candidato:</strong> disponibilizamos, na Central de Materiais, o
            modelo em PDF usado para formalizar o interesse em se tornar candidato à Ordem DeMolay. O
            preenchimento e envio dessa ficha acontecem fora deste site (pessoalmente ou por outro canal
            combinado com o Capítulo) — o download do modelo, por si só, não nos envia nenhum dado seu.
          </li>
          <li>
            <strong>Dados técnicos de navegação:</strong> em caso de falha de funcionamento do site, nosso
            sistema pode registrar automaticamente informações técnicas do seu navegador (como a URL
            acessada, mensagem de erro e horário) exclusivamente para fins de diagnóstico e correção de
            problemas.
          </li>
          <li>
            <strong>Preferência de tema:</strong> a escolha entre modo claro e escuro é salva apenas no seu
            próprio navegador (armazenamento local do dispositivo) e nunca é enviada aos nossos servidores.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: '3. Como usamos essas informações',
    content: (
      <>
        <p>Os dados eventualmente coletados são usados exclusivamente para:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Responder às mensagens enviadas por e-mail;</li>
          <li>Dar andamento ao processo de indicação de novos candidatos, quando aplicável;</li>
          <li>Identificar e corrigir erros técnicos do site, mantendo-o estável e seguro;</li>
          <li>Cumprir obrigações legais ou regulatórias da Ordem DeMolay, quando exigido.</li>
        </ul>
        <p>Não utilizamos seus dados para fins publicitários, e não fazemos venda ou aluguel de dados a terceiros.</p>
      </>
    ),
  },
  {
    question: '4. Cookies e serviços externos',
    content: (
      <>
        <p>
          Este site não utiliza cookies de rastreamento ou publicidade, nem ferramentas de análise de
          audiência (como Google Analytics). Os únicos recursos externos carregados são:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Google Fonts:</strong> as fontes tipográficas do site são carregadas dos servidores do
            Google, o que pode envolver o compartilhamento do seu endereço IP com o Google, conforme a{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              política de privacidade do Google
            </a>.
          </li>
          <li>
            <strong>Redes sociais:</strong> os links para Instagram e Facebook levam a plataformas de
            terceiros, que possuem suas próprias políticas de privacidade, independentes desta.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: '5. Compartilhamento de dados',
    content: (
      <p>
        Não compartilhamos dados pessoais com terceiros para fins comerciais. Dados relativos ao processo de
        candidatura podem ser compartilhados internamente com o Supremo Conselho da Ordem DeMolay no Brasil e
        demais instâncias da Ordem, exclusivamente quando necessário para a formalização do ingresso do
        candidato, seguindo os regulamentos internos da Instituição.
      </p>
    ),
  },
  {
    question: '6. Proteção de dados de menores de idade',
    content: (
      <p>
        A Ordem DeMolay forma jovens de 12 a 21 anos, o que significa que boa parte dos nossos candidatos e
        membros são menores de idade. Nos casos em que o processo de indicação envolve um candidato menor de
        18 anos, o tratamento dos seus dados pessoais é feito com a participação e o consentimento de pelo
        menos um dos pais ou responsável legal, em conformidade com o artigo 14 da Lei Geral de Proteção de
        Dados (LGPD). Este site, por não possuir formulários on-line, não coleta diretamente dados de
        menores além das informações técnicas de navegação descritas no item 2.
      </p>
    ),
  },
  {
    question: '7. Seus direitos como titular dos dados',
    content: (
      <>
        <p>Nos termos da LGPD (Lei nº 13.709/2018), você tem o direito de solicitar, a qualquer momento:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Confirmação da existência de tratamento dos seus dados;</li>
          <li>Acesso, correção ou atualização de dados incompletos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Informação sobre com quem compartilhamos seus dados;</li>
          <li>Revogação do consentimento, quando o tratamento se basear nele.</li>
        </ul>
        <p>
          Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
          <a href="mailto:contato@cgc30.com" className="text-primary underline underline-offset-4 hover:text-primary/80">
            contato@cgc30.com
          </a>.
        </p>
      </>
    ),
  },
  {
    question: '8. Segurança da informação',
    content: (
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados eventualmente tratados
        contra acessos não autorizados, perda, alteração ou divulgação indevida, incluindo o uso de conexão
        segura (HTTPS) em todo o site.
      </p>
    ),
  },
  {
    question: '9. Alterações nesta política',
    content: (
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias no site ou
        mudanças na legislação aplicável. Recomendamos revisitar esta página de tempos em tempos. A data da
        última atualização está sempre indicada no topo desta página.
      </p>
    ),
  },
];

export function PrivacidadePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="mb-10">
          <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Política de Privacidade</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Sua confiança é importante para nós. Esta página explica, de forma simples e transparente, quais
            dados o site do Capítulo Grande Campinas nº 30 trata, para que servem e quais são os seus
            direitos.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <CalendarClock className="h-4 w-4" /> Última atualização: 24 de agosto de 2026
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {SECTIONS.map((section) => (
            <AccordionItem key={section.question} value={section.question}>
              <AccordionTrigger className="text-base font-semibold font-playfair text-left">
                {section.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-3 [&>ul]:my-2">
                  {section.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 rounded-2xl bg-muted/50 border space-y-3">
          <h2 className="font-bold text-foreground">Fale conosco sobre privacidade</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" /> contato@cgc30.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Rua Isolethe Augusta Sousa Aranha, 188 - Centro, Campinas - SP, 13030-217</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
