#!/usr/bin/env python3
"""Validate the local Astro output before deploying the book site."""
from html.parser import HTMLParser
import argparse
import html as html_module
import json
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent / "frontend" / "dist"
DOMAIN = "https://confrontocibernetico.com.br"
COVER = f"{DOMAIN}/assets/capa-confronto-cibernetico.jpeg"
PHRASE = "Uma visão operacional sobre defesa, inteligência e resposta a incidentes, construída a partir da linha de frente de combate em segurança cibernética"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical = []
        self.og_images = []
        self.og_titles = []
        self.titles = []
        self._title = False
        self.json_scripts = []
        self._json = False

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "link" and attributes.get("rel") == "canonical":
            self.canonical.append(attributes.get("href"))
        if tag == "meta" and attributes.get("property") == "og:image":
            self.og_images.append(attributes.get("content"))
        if tag == "meta" and attributes.get("property") == "og:title":
            self.og_titles.append(attributes.get("content"))
        if tag == "title":
            self._title = True
        if tag == "script" and attributes.get("type") == "application/ld+json":
            self._json = True

    def handle_data(self, data):
        if self._title:
            self.titles.append(data)
        if self._json:
            self.json_scripts.append(data)

    def handle_endtag(self, tag):
        if tag == "script":
            self._json = False
        if tag == "title":
            self._title = False


def check(condition, message):
    if not condition:
        raise AssertionError(message)


def parse_page(path, expected_url):
    check(path.is_file(), f"Página ausente: {path}")
    html = path.read_text()
    parsed = PageParser()
    parsed.feed(html)
    check(parsed.canonical == [expected_url], f"Canonical incorreta: {path}")
    check(parsed.og_images == [COVER], f"Open Graph incorreto: {path}")
    for script in parsed.json_scripts:
        json.loads(script)
    check(parsed.json_scripts, f"JSON-LD ausente: {path}")
    return html, [json.loads(script) for script in parsed.json_scripts]


def prose_length(html):
    match = re.search(r'<div class="article-prose">(.*?)</div>', html, re.S)
    if not match:
        return 0
    return len(html_module.unescape(re.sub(r'<[^>]+>', '', match.group(1))))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--strict-content', action='store_true', help='exigir os 104 artigos e 120 verbetes longos no HTML final')
    args = parser.parse_args()
    check((ROOT / "favicon.png").is_file(), "Favicon ausente")
    check((ROOT / "assets" / "capa-confronto-cibernetico.jpeg").is_file(), "Capa ausente")
    home, schemas = parse_page(ROOT / "index.html", f"{DOMAIN}/")
    check(PHRASE in home, "Texto da home divergente")
    graph = schemas[0].get("@graph", [])
    check(any(item.get("@type") == "WebSite" for item in graph), "WebSite JSON-LD ausente")
    book = next((item for item in graph if item.get("@type") == "Book"), None)
    check(book and book["image"]["url"] == COVER, "Imagem do Book JSON-LD incorreta")

    article_dirs = sorted((ROOT / "artigos").glob("*/index.html"))
    check(len(article_dirs) == 104, f"Esperados 104 artigos; encontrados {len(article_dirs)}")
    for path in article_dirs:
        url = f"{DOMAIN}/artigos/{path.parent.name}/"
        html, schema = parse_page(path, url)
        check("capítulo" in html.lower() and "Confronto Cibernético" in html, f"Contexto do livro ausente: {path}")
        check(any(any(item.get("@type") == "Article" for item in block.get("@graph", [])) for block in schema), f"Article JSON-LD ausente: {path}")
        if args.strict_content:
            check(prose_length(html) >= 20_000, f"Artigo curto no HTML: {path} ({prose_length(html)})")

    glossary_index, glossary_schema = parse_page(ROOT / "glossario" / "index.html", f"{DOMAIN}/glossario/")
    check("glossary-search" in glossary_index, "Busca do glossário ausente")
    check(any(block.get("@type") == "DefinedTermSet" for block in glossary_schema), "DefinedTermSet ausente")
    term_dirs = sorted((ROOT / "glossario").glob("*/index.html"))
    check(len(term_dirs) == 120, f"Esperados 120 verbetes; encontrados {len(term_dirs)}")
    for path in term_dirs:
        url = f"{DOMAIN}/glossario/{path.parent.name}/"
        html, schema = parse_page(path, url)
        check("capítulo" in html.lower(), f"Capítulo relacionado ausente: {path}")
        check(any(any(item.get("@type") == "DefinedTerm" for item in block.get("@graph", [])) for block in schema), f"DefinedTerm JSON-LD ausente: {path}")
        if args.strict_content:
            check(prose_length(html) >= 10_000, f"Verbete curto no HTML: {path} ({prose_length(html)})")

    catalog = json.loads((ROOT / "glossario" / "catalogo.json").read_text())
    check(len(catalog["terms"]) == 120, "Catálogo JSON do glossário incompleto")
    check((ROOT / "llms.txt").is_file() and "sitemap.xml" in (ROOT / "llms.txt").read_text(), "llms.txt ausente")

    sitemap = ET.parse(ROOT / "sitemap.xml")
    urls = [item.text for item in sitemap.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    check(len(urls) == 248 and len(set(urls)) == 248, f"Sitemap incorreto: {len(urls)} URLs")
    languages = ['pt', 'en', 'es', 'fr', 'de', 'he', 'zh', 'ja']
    for language in languages:
        page, schemas = parse_page(ROOT / 'autor' / language / 'index.html', f'{DOMAIN}/autor/{language}/')
        check('data-hiago-inventor' in page and 'ADAI' in page and 'Decripte US' in page and 'LLM' in page, f'Biografia incompleta: {language}')
        check(f'lang="{"pt-BR" if language == "pt" else language}"' in page, f'Idioma incorreto: {language}')
        check(f'dir="{"rtl" if language == "he" else "ltr"}"' in page, f'Direção incorreta: {language}')
        for alternate in languages:
            check(f'href="{DOMAIN}/autor/{alternate}/"' in page, f'Alternativa ausente: {language}/{alternate}')
        check(any(any(item.get('@type') == 'ProfilePage' for item in block.get('@graph', [])) for block in schemas), f'ProfilePage ausente: {language}')
    titles = {}
    for path in article_dirs:
        check(f"{DOMAIN}/artigos/{path.parent.name}/" in urls, f"Artigo ausente no sitemap: {path}")
    for path in term_dirs:
        check(f"{DOMAIN}/glossario/{path.parent.name}/" in urls, f"Verbete ausente no sitemap: {path}")
    check(f"{DOMAIN}/glossario/" in urls, "Índice do glossário ausente no sitemap")
    for url in urls:
        route = url.removeprefix(DOMAIN).strip("/")
        target = ROOT / route / "index.html" if route else ROOT / "index.html"
        check(target.is_file(), f"URL do sitemap sem arquivo estático: {url}")
        page = target.read_text()
        check(f'<link rel="canonical" href="{url}"' in page, f"Canonical ausente: {url}")
        check('name="robots" content="noindex"' not in page, f"Página com noindex: {url}")
        parsed = PageParser()
        parsed.feed(page)
        title = ''.join(parsed.titles).strip()
        check(title and len(title) <= 55, f"Title longo ou ausente ({len(title)}): {url}: {title}")
        check(len(parsed.og_titles) == 1 and len(parsed.og_titles[0]) <= 60, f"Open Graph title longo ou ausente: {url}")
        check(title not in titles, f"Title duplicado: {title} em {titles.get(title)} e {url}")
        titles[title] = url
    print("OK: home, capa, favicon, 104 artigos, 120 verbetes, oito biografias, catálogo JSON, llms.txt, metadados e 248 URLs estáticas no sitemap.")


if __name__ == "__main__":
    try:
        main()
    except (AssertionError, ValueError, KeyError, ET.ParseError) as exc:
        print(f"FALHA: {exc}", file=sys.stderr)
        sys.exit(1)
