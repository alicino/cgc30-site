export const GALLERY_IMAGES = [
  { id: 1, url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800', alt: 'Reunião de Jovens Líderes' },
  { id: 2, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800', alt: 'Trabalho em Equipe e Fraternidade' },
  { id: 3, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800', alt: 'Desenvolvimento de Caráter' },
  { id: 4, url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800', alt: 'Atividade de Liderança Juvenil' },
  { id: 5, url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800', alt: 'Projetos Sociais do Capítulo' },
  { id: 6, url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800', alt: 'Encontro de Membros' },
];
export const DOWNLOAD_FILES = [
  { id: 1, name: 'Estatuto Social do Capítulo', size: '2.4 MB', format: 'PDF', date: '10/02/2024' },
  { id: 2, name: 'Guia do Iniciático 2024', size: '5.1 MB', format: 'PDF', date: '05/01/2024' },
  { id: 3, name: 'Ficha de Inscrição de Membro', size: '0.8 MB', format: 'PDF', date: '20/03/2024' },
  { id: 4, name: 'Calendário de Virtudes Semestral', size: '1.5 MB', format: 'PDF', date: '12/03/2024' },
];
export const ARTICLES = [
  {
    id: 1,
    title: 'O Poder do Amor Filial na Juventude',
    summary: 'Explorando a primeira e principal virtude DeMolay e como ela molda o caráter dos nossos jovens em Campinas.',
    date: '15 Mai, 2024',
    author: 'Ir. João Silva',
    url: '/artigos/amor-filial',
    internal: true
  },
  {
    id: 2,
    title: 'Liderança Servidora: Lições de Frank S. Land',
    summary: 'Como os princípios do nosso fundador continuam guiando os Mestres Conselheiros no século XXI.',
    date: '10 Mai, 2024',
    author: 'Ir. Marcos Pereira',
    url: '#'
  },
  {
    id: 3,
    title: 'A Importância da Filantropia no Capítulo',
    summary: 'Relato das últimas ações sociais realizadas pelo Capítulo Grande Campinas e o impacto na comunidade local.',
    date: '05 Mai, 2024',
    author: 'Ir. Carlos Alberto',
    url: '#'
  }
];
// Fonte de verdade: /prompts/calendario_LXXXIV.md (Cronograma de sessões e eventos da LXXXIV Gestão)
// type = coluna "Tipo", title = coluna "Descrição" (nome da reunião), date = coluna "Data" (DD/MM/AAAA)
export const EVENTS = [
  {
    id: 1,
    type: 'Pública',
    title: 'Instalação de oficiais, da nova gestão LXXXIV.',
    date: '02/08/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 2,
    type: 'Ordinária',
    title: 'Reunião de exposição do calendário da gestão LXXXIV Gestão Administrativa',
    date: '16/08/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 3,
    type: 'Pública',
    title: 'Cerimônia Pública em Homenagem aos Pais e Cerimônia de Maioridade.',
    date: '23/08/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 4,
    type: 'Ordinária',
    title: 'Escrutínio para entrada de novos membros e Palestra de tema: "A Pátria Brasileira", ministrada pelo Irmão Paulo Anderaus.',
    date: '06/09/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 5,
    type: 'Ordinária',
    title: 'Palestra acerca do Tema Anual do SCDB.',
    date: '13/09/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 6,
    type: 'Ordinária',
    title: 'Iniciação ao Grau Iniciático',
    date: '20/09/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 7,
    type: 'Pública',
    title: "Investidura ao Grau de Chevalier do irmão Gustavo D'Abruzzo.",
    date: '04/10/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 8,
    type: 'A Definir',
    title: 'A Definir',
    date: '11/10/2026',
    time: 'A Definir',
    location: 'A Definir'
  },
  {
    id: 9,
    type: 'Ordinária',
    title: 'Palestra ministrada pelo tio Cezar Velardez.',
    date: '18/10/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 10,
    type: 'Administrativa',
    title: 'Apresentação dos trabalhos dos irmãos Iniciáticos',
    date: '25/10/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 11,
    type: 'Ordinária',
    title: 'Exame de Proficiência do Grau Iniciático + Palestra ministrada pelo Irmão Juan Velardez sobre F. S. Land',
    date: '08/11/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 12,
    type: 'Ordinária',
    title: 'Iniciação ao Grau DeMolay',
    date: '29/11/2026',
    time: '9h',
    location: 'Loja Constância'
  },
  {
    id: 13,
    type: 'Evento',
    title: 'Evento de Arrecadação da Gestão.',
    date: '05/12/2026',
    time: 'A Definir',
    location: 'A Definir'
  },
  {
    id: 14,
    type: 'Ordinária',
    title: 'Eleição da LXXXV Gestão Administrativa',
    date: '13/12/2026',
    time: '9h',
    location: 'Loja Constância'
  }
];