#!/usr/bin/env python3
"""Check generated navigation targets, snippets and editorial page coverage."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent / 'frontend' / 'dist'
DOMAIN = 'https://confrontocibernetico.com.br'


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids, self.links, self.description, self.og_description = set(), [], [], []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            assert attrs['id'] not in self.ids, f'ID duplicado: {attrs["id"]}'
            self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description.append(attrs.get('content', ''))
        if tag == 'meta' and attrs.get('property') == 'og:description':
            self.og_description.append(attrs.get('content', ''))


def main():
    urls = [node.text for node in ET.parse(ROOT / 'sitemap.xml').findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    pages = {}
    sources = {}
    for url in urls:
        path = ROOT / url.removeprefix(DOMAIN).lstrip('/') / 'index.html'
        sources[url] = path.read_text()
        pages[url] = Page(sources[url])
    for url, page in pages.items():
        for href in page.links:
            dest = urlparse(urljoin(url, href))
            if dest.netloc != urlparse(DOMAIN).netloc:
                continue
            target = DOMAIN + dest.path
            if target not in pages:
                assert (ROOT / unquote(dest.path).lstrip('/')).is_file(), f'Link sem destino: {url} -> {href}'
            if dest.fragment and target in pages:
                assert unquote(dest.fragment) in pages[target].ids, f'Âncora inexistente: {url} -> {href}'
        if '/artigos/' in url and url != DOMAIN + '/artigos/' or '/glossario/' in url and url != DOMAIN + '/glossario/':
            assert len(page.description) == 1 and 50 <= len(page.description[0]) <= 160, f'Snippet incorreto: {url}'
            assert page.description == page.og_description, f'Snippet OG divergente: {url}'
    revised_articles = [url for url in urls if '/artigos/' in url and '19 de outubro de 2026' in sources[url]]
    assert len(revised_articles) == 20, f'Esperados 20 guias com apresentação própria, encontrados {len(revised_articles)}'
    for url in revised_articles:
        assert 'class="article-lead"' in sources[url], f'Resumo visível ausente: {url}'
    home, index = pages[DOMAIN + '/'], pages[DOMAIN + '/artigos/']
    assert 'percursos-titulo' in home.ids and 'percursos-titulo' in index.ids
    assert len([value for value in index.ids if value in ['escolher-livros', 'preparar-resposta', 'investigar-apts', 'operar-defesa', 'conter-recuperar', 'medir-aprender']]) == 6
    graph_signatures = []
    for url in urls:
        if '/artigos/' in url and url != DOMAIN + '/artigos/':
            graph_signatures.append(tuple(link for link in pages[url].links[-6:] if '/artigos/' in link))
    assert len(set(graph_signatures)) > 50, 'Recomendações de artigos pouco variadas'
    print(f'OK: {len(pages)} páginas; links e âncoras locais válidos; 20 resumos; 6 percursos; snippets e Open Graph consistentes.')


if __name__ == '__main__':
    main()
