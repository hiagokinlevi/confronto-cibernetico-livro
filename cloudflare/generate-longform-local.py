#!/usr/bin/env python3
"""Create and validate local editorial drafts with Codex; never publishes them."""
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
from pathlib import Path
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'frontend' / 'src' / 'data' / 'articles.txt'
DESTINATION = ROOT / 'frontend' / 'src' / 'content' / 'articles'
CHAPTERS = {
    1: 'APTs, persistência e ciclo de ataque',
    2: 'fases da resposta a incidentes e modelo NIST',
    3: 'resposta proativa e confronto cibernético',
    4: 'limitações da resposta tradicional diante de APTs',
    5: 'conceito de Black Team',
    6: 'Black Teams na identificação e resposta a incidentes',
    7: 'estrutura, papéis e coordenação do Black Team',
    8: 'operações de resposta, contenção e recuperação',
    9: 'métricas de resposta a incidentes',
    10: 'avaliação e melhoria contínua',
    11: 'referências bibliográficas',
}


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
        title, category, chapter, answer, practice, caution = line.split('|')
        yield dict(title=title, category=category, chapter=int(chapter), answer=answer, practice=practice, caution=caution, slug=slugify(title))


def prompt_for(item):
    return f'''Escreva UM artigo editorial original em português brasileiro, destinado ao site de Confronto Cibernético. Entregue 22.000 a 24.000 caracteres de TEXTO VISÍVEL (exclua sinais de Markdown); mínimo absoluto 20.000. Produza conteúdo substancial, específico e útil. Não repita parágrafos, perguntas ou conclusões para alcançar o tamanho. Não copie trechos do manuscrito.

TÍTULO E PALAVRA-CHAVE PRINCIPAL: {item['title']}
ÁREA: {item['category']}
CAPÍTULO RELACIONADO DO MANUSCRITO ORIGINAL: {item['chapter']} — {CHAPTERS[item['chapter']]}
RESPOSTA CURTA JÁ PUBLICADA: {item['answer']}
APLICAÇÃO: {item['practice']}
CAUTELA: {item['caution']}

Planeje uma pauta PARTICULAR para esse tema. Comece pela pergunta central da busca e percorra definição, contexto, decisões práticas, fontes de evidência pertinentes, papéis, exemplos defensivos seguros, cenários contrastantes, erros comuns, critérios de avaliação, exercício de mesa ou de laboratório autorizado, roteiro de implementação e FAQ pertinente. Nem todas essas seções servem a todos os temas; adapte a estrutura. Faça cada seção desenvolver uma questão nova. Distingua fatos confirmados de hipóteses, e alertas de provas. Evite comandos de exploração, instruções ofensivas contra terceiros e promessas de resultado. Não invente métricas, incidentes reais, citações, estudos, nomes de obras ou bibliografia. Quando mencionar um cenário, sinalize claramente que é hipotético. Use linguagem clara para profissionais, com exemplos concretos e precisão técnica. Apresente o livro de Hiago Kin Levi, Editora Brasport, em apenas uma seção ao final, relacionada ao capítulo informado, sem propaganda repetitiva. Uma obra não substitui documentação técnica atualizada, treino nem julgamento da equipe.

Formato: Markdown simples, primeira linha '# {item['title']}', seções H2, subseções H3, parágrafos e listas onde forem úteis. Sem tabelas, HTML ou blocos de código. Não repita o título em outras seções. Não use links inventados. Grave SOMENTE o artigo em article.md no diretório de trabalho. Depois confira a contagem de caracteres visíveis e expanda com conteúdo NOVO se estiver abaixo de 20.000. Não execute rede, não faça deploy, não leia outros diretórios. No texto final da conversa, informe somente a contagem.
'''


def generate(item, model):
    DESTINATION.mkdir(parents=True, exist_ok=True)
    target = DESTINATION / f"{item['slug']}.md"
    if target.exists() and visible_length(target.read_text()) >= 20_000:
        return item['slug'], 'já completo', visible_length(target.read_text())
    working = Path(tempfile.mkdtemp(prefix=f"cc-{item['slug'][:20]}-"))
    prompt = prompt_for(item)
    command = ['codex', 'exec', '--ephemeral', '--ignore-user-config', '--skip-git-repo-check', '--sandbox', 'workspace-write', '--model', model, '-c', 'model_reasoning_effort="medium"', '--color', 'never', '-C', str(working), '-']
    log = working / 'codex.log'
    with log.open('w') as output:
        try:
            subprocess.run(command, input=prompt, text=True, stdout=output, stderr=subprocess.STDOUT, timeout=600, check=False)
        except subprocess.TimeoutExpired:
            pass
    draft = working / 'article.md'
    if not draft.exists():
        return item['slug'], f'FALHOU (sem arquivo; {working})', 0
    content = draft.read_text()
    length = visible_length(content)
    if length < 20_000 or len(re.findall(r'^## ', content, re.M)) < 5:
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
    parser.add_argument('--limit', type=int, default=100)
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
