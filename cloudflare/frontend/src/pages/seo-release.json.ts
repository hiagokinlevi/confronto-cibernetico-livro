import { execFileSync } from 'node:child_process';
import { articleFocus, glossaryFocus, readingPaths, EDITORIAL_REVIEW_DATE } from '../data/editorial';

export const prerender = true;
export function GET() {
  const commit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('Invalid source revision');
  return new Response(JSON.stringify({
    release: 'seo-reading-paths-2026-10-19',
    commit,
    revised: EDITORIAL_REVIEW_DATE,
    articleGuides: Object.keys(articleFocus).length,
    glossarySnippets: Object.keys(glossaryFocus).length,
    readingPaths: readingPaths.length,
  }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
