// Bibliographic facts checked against the two Brasport edition pages on 2026-10-19.
export const bookTitle = 'Confronto Cibernético: Técnicas e táticas de enfrentamento e resposta a ameaças persistentes avançadas (APTs)';
export const citationEditions = [
  { key: 'impresso', label: 'Livro impresso', isbn: '9786560961135', productId: 1758, edition: '1' },
  { key: 'ebook', label: 'E-book', isbn: '9786560961128', productId: 1761, edition: undefined },
] as const;

export const citationFormats = [
  { extension: 'ris', label: 'RIS', contentType: 'application/x-research-info-systems; charset=utf-8' },
  { extension: 'bib', label: 'BibTeX', contentType: 'application/x-bibtex; charset=utf-8' },
  { extension: 'json', label: 'CSL JSON', contentType: 'application/json; charset=utf-8' },
] as const;

export function citationUrl(key: string, extension: string) {
  return `/referencias/confronto-cibernetico-${key}.${extension}`;
}

export function citationBody(edition: typeof citationEditions[number], format: typeof citationFormats[number]['extension']) {
  const url = `https://www.editorabrasport.com.br/index.php?route=product/product&product_id=${edition.productId}`;
  if (format === 'json') return JSON.stringify([{
    id: `confronto-cibernetico-${edition.isbn}`,
    type: 'book',
    title: bookTitle,
    author: [{ family: 'Levi', given: 'Hiago Kin' }],
    publisher: 'Brasport',
    issued: { 'date-parts': [[2026]] },
    language: 'pt-BR',
    ISBN: edition.isbn,
    URL: url,
    'number-of-pages': '300',
    ...(edition.edition ? { edition: edition.edition } : {}),
    note: `Formato: ${edition.label}. Dados conferidos no catálogo da editora em 19/10/2026.`,
  }], null, 2) + '\n';

  if (format === 'ris') return [
    'TY  - BOOK',
    'AU  - Levi, Hiago Kin',
    `TI  - ${bookTitle}`,
    'PY  - 2026',
    'PB  - Brasport',
    ...(edition.edition ? [`ET  - ${edition.edition}`] : []),
    'LA  - Portuguese',
    `SN  - ${edition.isbn}`,
    `UR  - ${url}`,
    `N1  - Formato: ${edition.label}. Dados conferidos no catálogo da editora em 19/10/2026.`,
    'ER  - ',
    '',
  ].join('\r\n');

  return [
    `@book{levi2026confronto${edition.key},`,
    '  author = {Levi, Hiago Kin},',
    `  title = {${bookTitle}},`,
    '  publisher = {Brasport},',
    '  year = {2026},',
    ...(edition.edition ? [`  edition = {${edition.edition}},`] : []),
    '  language = {portuguese},',
    `  isbn = {${edition.isbn}},`,
    `  url = {${url}},`,
    `  note = {Formato: ${edition.label}. Dados conferidos no catálogo da editora em 19/10/2026.}`,
    '}',
    '',
  ].join('\n');
}
