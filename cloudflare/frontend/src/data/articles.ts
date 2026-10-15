import rawArticles from './articles.txt?raw';

export type Article = {
  keyword: string;
  category: string;
  chapterNumber: number;
  answer: string;
  practice: string;
  caution: string;
  slug: string;
};

const slugify = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const articles: Article[] = rawArticles.trim().split(/\r?\n/).filter((line) => line && !line.startsWith('#')).map((line, index) => {
  const fields = line.split('|').map((field) => field.trim());
  if (fields.length !== 6) throw new Error(`Artigo ${index + 1}: esperados 6 campos, encontrados ${fields.length}`);
  const [keyword, category, chapter, answer, practice, caution] = fields;
  const chapterNumber = Number(chapter);
  if (!keyword || !category || !answer || !practice || !caution || !Number.isInteger(chapterNumber) || chapterNumber < 1 || chapterNumber > 11) {
    throw new Error(`Artigo ${index + 1}: metadados incompletos`);
  }
  return { keyword, category, chapterNumber, answer, practice, caution, slug: slugify(keyword) };
});

if (articles.length !== 104) throw new Error(`Esperados 104 artigos, encontrados ${articles.length}`);
if (new Set(articles.map((article) => article.slug)).size !== articles.length) throw new Error('Há slugs duplicados nos artigos');
if (new Set(articles.map((article) => article.keyword.toLocaleLowerCase('pt-BR'))).size !== articles.length) throw new Error('Há palavras-chave duplicadas');

export const articleUrl = (article: Article) => `/artigos/${article.slug}/`;

export const referenceByCategory: Record<string, { label: string; url: string }> = {
  'Livros e estudo': { label: 'Catálogo da Editora Brasport', url: 'https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758' },
  'Preparação': { label: 'NIST SP 800-61 Rev. 3', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
  'Detecção': { label: 'MITRE ATT&CK Enterprise', url: 'https://attack.mitre.org/matrices/enterprise/' },
  'APTs': { label: 'MITRE ATT&CK Enterprise', url: 'https://attack.mitre.org/matrices/enterprise/' },
  'Forense': { label: 'NIST SP 800-86', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
  'Contenção': { label: 'Guia StopRansomware da CISA', url: 'https://www.cisa.gov/stopransomware/ransomware-guide' },
  'Inteligência': { label: 'MITRE ATT&CK Enterprise', url: 'https://attack.mitre.org/matrices/enterprise/' },
  'Equipes': { label: 'FIRST CSIRT Services Framework', url: 'https://www.first.org/standards/frameworks/csirts/csirt_services_framework_v2.1' },
  'Métricas': { label: 'FIRST Metrics for the CSIRT Services Framework', url: 'https://www.first.org/global/sigs/metrics/metrics_csirt_services_framework_v1-0' },
  'Cenários': { label: 'NIST SP 800-61 Rev. 3', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
};
