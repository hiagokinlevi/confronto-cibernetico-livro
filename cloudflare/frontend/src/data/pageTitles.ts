import { articleFocus, glossaryFocus } from './editorial';

const MAX_TITLE_LENGTH = 55;
const BRAND = 'Confronto Cibernético';

const articleOverrides: Record<string, string> = {
  'colaboracao-entre-ti-juridico-e-seguranca-em-incidentes': 'TI, jurídico e segurança em incidentes',
};

const chapterOverrides: Record<string, string> = {
  'analise-pos-incidente-melhoria-continua': 'Análise pós-incidente e melhoria contínua',
  'black-team-red-blue-inteligencia': 'Black Team, Red Team, Blue Team e inteligência',
  'contencao-erradicacao-recuperacao': 'Contenção, erradicação e recuperação',
  'estrutura-equipe-black-team': 'Como estruturar um Black Team',
  'identificacao-sinais-apt-incidente': 'Sinais de atividade APT em incidentes',
};

function compactTitle(subject: string, section: string): string {
  const branded = `${subject} | ${BRAND}`;
  if (branded.length <= MAX_TITLE_LENGTH) return branded;

  const sectional = `${subject} | ${section}`;
  if (sectional.length <= MAX_TITLE_LENGTH) return sectional;

  if (subject.length <= MAX_TITLE_LENGTH) return subject;
  throw new Error(`Título precisa de uma forma curta: ${subject}`);
}

export function articlePageTitle(slug: string, keyword: string): string {
  if (articleFocus[slug]) return articleFocus[slug].title;
  return compactTitle(articleOverrides[slug] ?? keyword, 'Artigo');
}

export function chapterPageTitle(slug: string, searchTitle: string): string {
  return compactTitle(chapterOverrides[slug] ?? searchTitle, 'Capítulo');
}

export function glossaryPageTitle(name: string, slug?: string): string {
  if (slug && glossaryFocus[slug]) return glossaryFocus[slug].title;
  const subject = name.length <= 44 ? `${name}: definição` : name;
  return compactTitle(subject, 'Glossário');
}
