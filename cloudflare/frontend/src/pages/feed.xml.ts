import { resources, resourceUrl } from '../data/resources';
import { articles, articleUrl } from '../data/articles';
import { articleFocus } from '../data/editorial';
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function GET() {
  const base = 'https://confrontocibernetico.com.br';
  const items = [...resources.map(resource=>({ title:resource.title,description:resource.description,path:resourceUrl(resource) })), ...articles.filter(article=>articleFocus[article.slug]).map(article=>({title:articleFocus[article.slug].title,description:articleFocus[article.slug].description,path:articleUrl(article)}))];
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Confronto Cibernético — recursos e guias</title><link>${base}/</link><description>Ferramentas, exercícios e guias para estudar resposta a incidentes cibernéticos.</description><language>pt-BR</language><atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>${items.map(item=>`<item><title>${escape(item.title)}</title><link>${base}${item.path}</link><guid isPermaLink="true">${base}${item.path}</guid><description>${escape(item.description)}</description><pubDate>Mon, 19 Oct 2026 12:00:00 GMT</pubDate></item>`).join('')}</channel></rss>`;
  return new Response(body,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
