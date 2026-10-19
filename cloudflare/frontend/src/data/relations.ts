import type { Article } from './articles';
import type { Term } from './glossary';
import { pathsForArticle } from './editorial';

const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const contains = (text: string, phrase: string) => {
  const needle = normalize(phrase).trim();
  if (needle.length < 2) return false;
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`).test(normalize(text));
};

export function termsForArticle(article: Article, terms: Term[], limit = 6): Term[] {
  const candidates = terms.map((term) => {
    const names = [term.name, ...term.aliases].filter((name) => name.length >= 3);
    const score = names.some((name) => contains(article.keyword, name)) ? 3 : names.some((name) => contains(`${article.answer} ${article.practice}`, name)) ? 1 : 0;
    return { term, score };
  });
  return candidates.filter(({ score }) => score).sort((a, b) => b.score - a.score || a.term.name.localeCompare(b.term.name, 'pt-BR')).slice(0, limit).map(({ term }) => term);
}

export function articlesForTerm(term: Term, articles: Article[], limit = 4): Article[] {
  const preferred: Record<string, string[]> = {
    apt: ['livro-sobre-ameacas-persistentes-avancadas', 'threat-hunting-para-encontrar-apts'],
    edr: ['edr-na-investigacao-de-incidentes', 'analise-forense-de-endpoint'],
    soar: ['como-criar-um-playbook-de-incidentes', 'triagem-de-alertas-de-seguranca'],
    mfa: ['sinais-de-credenciais-comprometidas', 'comprometimento-de-conta-em-nuvem'],
    ssh: ['analise-forense-de-logs-de-autenticacao', 'movimento-lateral-em-rede-corporativa'],
    'inteligencia-tatica': ['inteligencia-de-ameacas-ciberneticas', 'indicadores-de-comprometimento-e-ttps'],
    'escalonamento-de-privilegios': ['escalada-de-privilegio-em-incidentes', 'ataque-a-active-directory'],
    steganografia: ['exfiltracao-de-dados-em-uma-apt', 'analise-forense-de-trafego-de-rede'],
    'resiliencia-operacional': ['recuperacao-de-sistemas-apos-ataque-cibernetico', 'plano-de-resposta-a-incidentes-ciberneticos'],
    misp: ['compartilhamento-de-inteligencia-entre-equipes', 'inteligencia-de-ameacas-ciberneticas'],
    'zero-day': ['ciclo-de-ataque-de-uma-apt', 'priorizacao-de-ameacas-para-empresas'],
    tls: ['analise-forense-de-trafego-de-rede', 'logs-essenciais-para-detectar-invasoes'],
    'active-directory': ['ataque-a-active-directory', 'escalada-de-privilegio-em-incidentes'],
    recuperacao: ['recuperacao-de-sistemas-apos-ataque-cibernetico', 'resposta-a-ransomware-em-empresas'],
    'spear-phishing': ['resposta-a-ataque-de-phishing-corporativo', 'acesso-inicial-em-ataques-avancados'],
    sysmon: ['logs-essenciais-para-detectar-invasoes', 'analise-forense-de-endpoint'],
  };
  const preferredSlugs = preferred[term.slug] ?? [];
  for (const slug of preferredSlugs) {
    if (!articles.some(article => article.slug === slug)) throw new Error(`Artigo relacionado inexistente: ${slug}`);
  }
  const names = [term.name, ...term.aliases].filter((name) => name.length >= 2);
  const candidates = articles.map((article) => {
    const preferredIndex = preferredSlugs.indexOf(article.slug);
    const score = preferredIndex >= 0 ? 10 - preferredIndex : names.some((name) => contains(article.keyword, name)) ? 3 : names.some((name) => contains(article.answer, name)) ? 1 : 0;
    return { article, score };
  });
  return candidates.filter(({ score }) => score).sort((a, b) => b.score - a.score || a.article.keyword.localeCompare(b.article.keyword, 'pt-BR')).slice(0, limit).map(({ article }) => article);
}

export function relatedArticles(article: Article, articles: Article[], limit = 4): Article[] {
  const paths = pathsForArticle(article.slug);
  const words = new Set(normalize(article.keyword).split(/[^a-z0-9]+/).filter(word => word.length > 3 && !['como', 'para', 'sobre', 'livro', 'livros'].includes(word)));
  return articles.filter(item => item.slug !== article.slug).map(item => {
    const sharedPath = paths.some(path => path.slugs.includes(item.slug));
    const overlap = normalize(item.keyword).split(/[^a-z0-9]+/).filter(word => words.has(word)).length;
    const score = (sharedPath ? 8 : 0) + (item.chapterNumber === article.chapterNumber ? 3 : 0) + (item.category === article.category ? 2 : 0) + overlap * 2;
    return { item, score };
  }).filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.keyword.localeCompare(b.item.keyword, 'pt-BR'))
    .slice(0, limit).map(result => result.item);
}
