import { execFileSync } from 'node:child_process';

export const prerender = true;
export function GET() {
  // Public, non-sensitive proof of the locally built static artifact.
  const commit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('Invalid source revision');
  return new Response(JSON.stringify({ release: 'hiago-adai-2026-10-15', commit, languages: ['pt','en','es','fr','de','he','zh','ja'] }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
