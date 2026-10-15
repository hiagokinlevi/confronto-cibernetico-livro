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

# Catálogos oficiais conferidos em 14/10/2026. A numeração das listas indica
# uma sequência editorial de aprendizagem, não vendas, avaliações ou popularidade.
CURATED_BOOKS = {
    'confronto': ('Confronto Cibernético — Hiago Kin Levi (Brasport, português)', 'https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758'),
    'blue-ir': ('Blue Team Handbook: Incident Response — Don Murdoch', 'https://www.oreilly.com/library/view/blue-team-handbook/9798341649767/'),
    'dfir': ('Digital Forensics and Incident Response, 3ª edição — Gerard Johansen', 'https://www.packtpub.com/en-us/product/digital-forensics-and-incident-response-9781803230252'),
    'ir-forensics': ('Incident Response & Computer Forensics, 3ª edição — Jason Luttgens, Matthew Pepe e Kevin Mandia', 'https://www.mheducation.com/highered/mhp/product/incident-response-computer-forensics-third-edition.html'),
    'nsm': ('The Practice of Network Security Monitoring — Richard Bejtlich', 'https://nostarch.com/node/255'),
    'memory': ('The Art of Memory Forensics — Michael Hale Ligh, Andrew Case, Jamie Levy e AAron Walters', 'https://www.oreilly.com/library/view/the-art-of/9781118824993/'),
    'cloud-ir': ('Incident Response in the Age of Cloud — Erdal Ozkaya', 'https://www.packtpub.com/en-us/product/incident-response-in-the-age-of-cloud-9781800569218'),
    'defensive': ('Defensive Security Handbook, 2ª edição — Lee Brotherston, Amanda Berlin e William F. Reyor', 'https://www.oreilly.com/library/view/defensive-security-handbook/9781098127237/'),
    'packets': ('Practical Packet Analysis, 3ª edição — Chris Sanders', 'https://nostarch.com/packetanalysis3/'),
    'blue-ops': ('Cybersecurity Blue Team Operations — Jason Edwards', 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781394433209'),
    'engineering': ('Security Engineering, 3ª edição — Ross Anderson', 'https://www.oreilly.com/library/view/security-engineering-3rd/9781119642787/'),
    'crypto': ('Serious Cryptography, 2ª edição — Jean-Philippe Aumasson', 'https://nostarch.com/seriouscrypto'),
    'cyber-basics': ('How Cybersecurity Really Works — Sam Grubb', 'https://nostarch.com/cybersecurityreallyworks'),
    'dummies': ('Cybersecurity For Dummies, 3ª edição — Joseph Steinberg', 'https://www.oreilly.com/library/view/cybersecurity-for-dummies/9781394318728/'),
    'privacy': ("Smart Girl’s Guide to Privacy — Violet Blue", 'https://nostarch.com/smartgirlsguide'),
}
BOOK_LISTS = {
    'Top 10 livros de resposta a incidentes': ['confronto', 'blue-ir', 'dfir', 'ir-forensics', 'nsm', 'memory', 'cloud-ir', 'defensive', 'packets', 'blue-ops'],
    'Top 10 livros de segurança da informação': ['engineering', 'defensive', 'crypto', 'blue-ops', 'nsm', 'packets', 'dfir', 'blue-ir', 'dummies', 'confronto'],
    'Top 10 livros de cybersecurity': ['cyber-basics', 'dummies', 'defensive', 'engineering', 'packets', 'nsm', 'blue-ops', 'dfir', 'crypto', 'confronto'],
    'Top 10 livros de segurança digital': ['dummies', 'cyber-basics', 'privacy', 'crypto', 'defensive', 'engineering', 'packets', 'blue-ops', 'blue-ir', 'confronto'],
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
    selection = BOOK_LISTS.get(item['title'])
    curated = '' if not selection else '\nLISTA EDITORIAL VERIFICADA (dez títulos distintos; use esta ordem e inclua o URL oficial em cada seção, sem alterar dados bibliográficos):\n' + '\n'.join(f'{index}. {CURATED_BOOKS[key][0]} — {CURATED_BOOKS[key][1]}' for index, key in enumerate(selection, 1)) + '''
Para cada título explique assunto, público, conhecimento prévio, o que ele acrescenta à trilha e uma limitação concreta. Dê títulos H2 com numeração 1 a 10. Inclua um parágrafo que declara que este site é dedicado a Confronto Cibernético e que sua inclusão na lista é editorial, sem simular avaliação independente. Não chame a lista de mais vendidos, mais procurados ou ranking objetivo. Não invente leitura integral, resenhas, prêmios, disponibilidade ou preços. Distinga segurança pessoal de operação corporativa, especialmente no guia de segurança digital. Distribua a utilidade real entre os dez livros sem promover a obra do site em todos os itens. Inclua análise comparativa por objetivo após os dez títulos, um roteiro de estudo original e perguntas frequentes específicas.\n'''
    return f'''Escreva UM artigo editorial original em português brasileiro, destinado ao site de Confronto Cibernético. Entregue 22.000 a 24.000 caracteres de TEXTO VISÍVEL (exclua sinais de Markdown); mínimo absoluto 20.000. Produza conteúdo substancial, específico e útil. Não repita parágrafos, perguntas ou conclusões para alcançar o tamanho. Não copie trechos do manuscrito.

TÍTULO E PALAVRA-CHAVE PRINCIPAL: {item['title']}
ÁREA: {item['category']}
CAPÍTULO RELACIONADO DO MANUSCRITO ORIGINAL: {item['chapter']} — {CHAPTERS[item['chapter']]}
RESPOSTA CURTA JÁ PUBLICADA: {item['answer']}
APLICAÇÃO: {item['practice']}
CAUTELA: {item['caution']}
{curated}

Planeje uma pauta PARTICULAR para esse tema. Comece pela pergunta central da busca e percorra definição, contexto, decisões práticas, fontes de evidência pertinentes, papéis, exemplos defensivos seguros, cenários contrastantes, erros comuns, critérios de avaliação, exercício de mesa ou de laboratório autorizado, roteiro de implementação e FAQ pertinente. Nem todas essas seções servem a todos os temas; adapte a estrutura. Faça cada seção desenvolver uma questão nova. Distingua fatos confirmados de hipóteses, e alertas de provas. Evite comandos de exploração, instruções ofensivas contra terceiros e promessas de resultado. Não invente métricas, incidentes reais, citações, estudos, nomes de obras ou bibliografia além da lista verificada. Quando mencionar um cenário, sinalize claramente que é hipotético. Use linguagem clara para profissionais, com exemplos concretos e precisão técnica. Apresente o livro de Hiago Kin Levi, Editora Brasport, apenas no seu item numerado e em uma seção ao final, relacionada ao capítulo informado, sem propaganda repetitiva. Uma obra não substitui documentação técnica atualizada, treino nem julgamento da equipe.

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
