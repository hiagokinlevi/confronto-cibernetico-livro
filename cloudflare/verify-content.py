#!/usr/bin/env python3
"""Report editorial completion against requested visible character minima."""
import argparse
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent / 'frontend' / 'src'


def slugify(text):
    import unicodedata
    normalized = ''.join(char for char in unicodedata.normalize('NFD', text.lower()) if unicodedata.category(char) != 'Mn')
    return re.sub(r'[^a-z0-9]+', '-', normalized).strip('-')


def visible_length(content):
    return len(re.sub(r'[#*_`\[\]()>-]', '', content))


def audit(label, source, content_dir, minimum, expected):
    slugs = [slugify(line.split('|', 1)[0]) for line in source.read_text().splitlines() if line and not line.startswith('#')]
    assert len(slugs) == expected and len(set(slugs)) == expected, f'{label}: fonte incorreta'
    lengths = {}
    for slug in slugs:
        file = content_dir / f'{slug}.md'
        lengths[slug] = visible_length(file.read_text()) if file.exists() else 0
    complete = {slug: length for slug, length in lengths.items() if length >= minimum}
    missing = [(slug, length) for slug, length in lengths.items() if length < minimum]
    print(f'{label}: {len(complete)}/{expected} com pelo menos {minimum:,} caracteres visíveis'.replace(',', '.'))
    if missing:
        print('Pendentes: ' + ', '.join(f'{slug} ({length})' for slug, length in missing[:10]))
        if len(missing) > 10:
            print(f'... e mais {len(missing) - 10}')
    return not missing


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--strict', action='store_true', help='falhar se qualquer texto estiver abaixo do mínimo')
    args = parser.parse_args()
    articles = audit('Artigos', ROOT / 'data' / 'articles.txt', ROOT / 'content' / 'articles', 20_000, 100)
    glossary = audit('Glossário', ROOT / 'data' / 'glossary.txt', ROOT / 'content' / 'glossary', 10_000, 120)
    if args.strict and not (articles and glossary):
        raise SystemExit(1)


if __name__ == '__main__':
    main()
