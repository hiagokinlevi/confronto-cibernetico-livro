import { citationBody, citationEditions } from '../../data/book-citations';

export function getStaticPaths() {
  return citationEditions.map(edition => ({ params: { edicao: `confronto-cibernetico-${edition.key}` }, props: { body: citationBody(edition, 'ris') } }));
}

export function GET({ props }: { props: { body: string } }) {
  return new Response(props.body, { headers: { 'Content-Type': 'application/x-research-info-systems; charset=utf-8' } });
}
