import { chapters, chapterUrl } from '../data/chapters';
import { articles, articleUrl } from '../data/articles';
import { terms, termUrl } from '../data/glossary';
import { BIO_LOCALES } from '../data/hiago-bio';
import { articleFocus, glossaryFocus, EDITORIAL_REVIEW_DATE } from '../data/editorial';
import { resources, resourceUrl } from '../data/resources';

export function GET() {
  const base = 'https://confrontocibernetico.com.br';
  const paths = ['/', '/capitulos/', ...chapters.map(chapterUrl), '/artigos/', ...articles.map(articleUrl), '/glossario/', ...terms.map(termUrl), '/imprensa/', ...BIO_LOCALES.map(lang=>`/autor/${lang}/`), '/recursos/', ...resources.map(resourceUrl), '/en/incident-response-resources/'];
  const revised = new Set(['/', '/artigos/', ...chapters.map(chapterUrl), ...Object.keys(articleFocus).map(slug => `/artigos/${slug}/`), ...Object.keys(glossaryFocus).map(slug => `/glossario/${slug}/`), '/recursos/', ...resources.map(resourceUrl), '/en/incident-response-resources/']);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${base}${path}</loc>${revised.has(path) ? `<lastmod>${EDITORIAL_REVIEW_DATE}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
