import { terms, termUrl } from '../../data/glossary';

export function GET() {
  const base = 'https://confrontocibernetico.com.br';
  const body = JSON.stringify({
    name: 'Glossário de segurança cibernética',
    url: `${base}/glossario/`,
    language: 'pt-BR',
    updated: '2026-10-14',
    terms: terms.map((term) => ({
      name: term.name,
      aliases: term.aliases,
      category: term.category,
      description: term.definition,
      chapterInOriginalManuscript: term.chapterNumber,
      url: `${base}${termUrl(term)}`,
    })),
  });
  return new Response(body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
