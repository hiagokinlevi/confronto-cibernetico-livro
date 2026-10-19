import { citationBody, citationEditions } from '../../data/book-citations';

export function getStaticPaths() {
  return citationEditions.map(edition => ({ params: { edicao: `confronto-cibernetico-${edition.key}` }, props: { body: citationBody(edition, 'json') } }));
}

export function GET({ props }: { props: { body: string } }) {
  return new Response(props.body, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
