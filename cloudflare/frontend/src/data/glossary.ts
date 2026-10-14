import rawGlossary from './glossary.txt?raw';

export type Term = {
  name: string;
  aliases: string[];
  category: string;
  chapterNumber: number;
  definition: string;
  note: string;
  slug: string;
};

const slugify = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const terms: Term[] = rawGlossary.trim().split(/\r?\n/).filter((line) => line && !line.startsWith('#')).map((line, index) => {
  const fields = line.split('|').map((field) => field.trim());
  if (fields.length !== 6) throw new Error(`Verbete ${index + 1}: esperados 6 campos, encontrados ${fields.length}`);
  const [name, aliasesRaw, category, chapter, definition, note] = fields;
  const chapterNumber = Number(chapter);
  if (!name || !category || !definition || !note || !Number.isInteger(chapterNumber) || chapterNumber < 1 || chapterNumber > 11) {
    throw new Error(`Verbete ${index + 1}: campos incompletos`);
  }
  return { name, aliases: aliasesRaw ? aliasesRaw.split(';').map((alias) => alias.trim()).filter(Boolean) : [], category, chapterNumber, definition, note, slug: slugify(name) };
});

if (terms.length !== 120) throw new Error(`Esperados 120 verbetes, encontrados ${terms.length}`);
if (new Set(terms.map((term) => term.slug)).size !== terms.length) throw new Error('Há URLs duplicadas no glossário');

export const termUrl = (term: Term) => `/glossario/${term.slug}/`;
