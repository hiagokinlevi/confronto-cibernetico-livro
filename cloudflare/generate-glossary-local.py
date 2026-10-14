#!/usr/bin/env python3
"""Draft long glossary entries locally; publication remains a separate reviewed step."""
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
from pathlib import Path
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'frontend' / 'src' / 'data' / 'glossary.txt'
DESTINATION = ROOT / 'frontend' / 'src' / 'content' / 'glossary'


def slugify(text):
    import unicodedata
    text = ''.join(char for char in unicodedata.normalize('NFD', text.lower()) if unicodedata.category(char) != 'Mn')
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')


def visible_length(markdown):
    return len(re.sub(r'[#*_`\[\]()>-]', '', markdown))


def records():
    for line in SOURCE.read_text().splitlines():
        if not line or line.startswith('#'):
            continue
        name, aliases, category, chapter, definition, note = line.split('|')
        yield dict(name=name, aliases=aliases, category=category, chapter=chapter, definition=definition, note=note, slug=slugify(name))


def prompt_for(item):
    return f'''Escreva UM verbete técnico aprofundado e original em português brasileiro para o glossário do livro Confronto Cibernético. O texto visível deve ter 11.000 a 12.500 caracteres, mínimo absoluto de 10.000, excluindo sinais de Markdown. A exigência é de explicação substantiva, não de repetição. Termine somente quando conferir a extensão.

TERMO: {item['name']}
SINÔNIMOS: {item['aliases'] or 'nenhum registrado'}
ÁREA: {item['category']}
CAPÍTULO RELACIONADO DA VERSÃO ORIGINAL DO MANUSCRITO: {item['chapter']}
DEFINIÇÃO JÁ REVISADA: {item['definition']}
NOTA PRÁTICA JÁ REVISADA: {item['note']}

Use a definição acima como núcleo factual. Explique o conceito com precisão e linguagem acessível a profissionais. Desenvolva origem ou contexto apenas se puder fazê-lo sem inventar fatos, como funciona em termos defensivos, quando o termo é útil, onde aparece na investigação, que evidências ajudam a reconhecê-lo, exemplos hipotéticos bem identificados, distinções com termos próximos, limitações, erros de interpretação, implicações para resposta a incidentes e perguntas frequentes específicas. Escolha seções adequadas ao termo, sem impor uma pauta genérica. Conceitos de ataque devem ser tratados de forma defensiva, sem tutorial operacional de exploração. Não invente estudos, números, siglas, histórias ou citações. Evite vender o livro repetidamente; ao final, uma seção breve pode relacionar o conceito ao capítulo informado da versão original. Não copie trechos do manuscrito. Não inclua metadados nem bloco de código.

Formato: Markdown simples, primeira linha '# {item['name']}', pelo menos seis seções H2, subseções H3 quando úteis, parágrafos e listas moderadas. Grave SOMENTE o verbete em term.md no diretório de trabalho. Não execute rede, não faça deploy, não leia outros diretórios. No texto final da conversa, informe somente a contagem de caracteres.
'''


def generate(item, model):
    DESTINATION.mkdir(parents=True, exist_ok=True)
    target = DESTINATION / f"{item['slug']}.md"
    if target.exists() and visible_length(target.read_text()) >= 10_000:
        return item['slug'], 'já completo', visible_length(target.read_text())
    working = Path(tempfile.mkdtemp(prefix=f"cc-term-{item['slug'][:20]}-"))
    command = ['codex', 'exec', '--ephemeral', '--ignore-user-config', '--skip-git-repo-check', '--sandbox', 'workspace-write', '--model', model, '-c', 'model_reasoning_effort="medium"', '--color', 'never', '-C', str(working), '-']
    with (working / 'codex.log').open('w') as output:
        try:
            subprocess.run(command, input=prompt_for(item), text=True, stdout=output, stderr=subprocess.STDOUT, timeout=600, check=False)
        except subprocess.TimeoutExpired:
            pass
    draft = working / 'term.md'
    if not draft.exists():
        return item['slug'], f'FALHOU (sem arquivo; {working})', 0
    content = draft.read_text()
    length = visible_length(content)
    heading_count = len(re.findall(r'^#{2,3} ', content, re.M))
    if length < 10_000 or len(re.findall(r'^## ', content, re.M)) < 4 or heading_count < 6:
        return item['slug'], f'REVISAR ({working})', length
    paragraphs = [re.sub(r'\s+', ' ', part.strip()) for part in re.split(r'\n\s*\n', content) if len(part.strip()) > 100]
    hashes = [hashlib.sha256(part.encode()).hexdigest() for part in paragraphs]
    if len(hashes) != len(set(hashes)):
        return item['slug'], f'REVISAR: parágrafo duplicado ({working})', length
    temporary = target.with_suffix('.md.tmp')
    temporary.write_text(content)
    temporary.replace(target)
    return item['slug'], 'pronto', length


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--start', type=int, default=0)
    parser.add_argument('--limit', type=int, default=120)
    parser.add_argument('--workers', type=int, default=2)
    parser.add_argument('--model', default='gpt-6.1-sol')
    args = parser.parse_args()
    items = list(records())[args.start:args.start + args.limit]
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = [pool.submit(generate, item, args.model) for item in items]
        for future in as_completed(futures):
            slug, status, length = future.result()
            print(f'{slug}: {status} ({length} caracteres)', flush=True)


if __name__ == '__main__':
    main()
