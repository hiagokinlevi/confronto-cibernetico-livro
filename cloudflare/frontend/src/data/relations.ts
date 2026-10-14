import type { Article } from './articles';
import type { Term } from './glossary';

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
  const names = [term.name, ...term.aliases].filter((name) => name.length >= 2);
  const candidates = articles.map((article) => {
    const score = names.some((name) => contains(article.keyword, name)) ? 3 : names.some((name) => contains(article.answer, name)) ? 1 : 0;
    return { article, score };
  });
  return candidates.filter(({ score }) => score).sort((a, b) => b.score - a.score || a.article.keyword.localeCompare(b.article.keyword, 'pt-BR')).slice(0, limit).map(({ article }) => article);
}
