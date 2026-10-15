import { chapters, chapterUrl } from '../data/chapters';
import { articles, articleUrl } from '../data/articles';
import { terms, termUrl } from '../data/glossary';
import { BIO_LOCALES } from '../data/hiago-bio';

export function GET() {
  const base = 'https://confrontocibernetico.com.br';
  const paths = ['/', '/capitulos/', ...chapters.map(chapterUrl), '/artigos/', ...articles.map(articleUrl), '/glossario/', ...terms.map(termUrl), '/imprensa/', ...BIO_LOCALES.map(lang=>`/autor/${lang}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
