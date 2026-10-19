#!/usr/bin/env python3
"""Check the published Cloudflare site after a local deploy."""
import subprocess
import time
import json
from pathlib import Path

base = "https://confrontocibernetico.com.br"
checks = {
    "/": "linha de frente de combate em segurança cibernética",
    "/artigos/": "104 temas",
    "/artigos/livro-de-resposta-a-incidentes-ciberneticos/": "Livro de resposta a incidentes cibernéticos",
    "/artigos/top-10-livros-de-resposta-a-incidentes/": "Top 10 livros de resposta a incidentes",
    "/artigos/top-10-livros-de-seguranca-da-informacao/": "Top 10 livros de segurança da informação",
    "/artigos/top-10-livros-de-cybersecurity/": "Top 10 livros de cybersecurity",
    "/artigos/top-10-livros-de-seguranca-digital/": "Top 10 livros de segurança digital",
    "/glossario/": "Glossário de segurança cibernética",
    "/glossario/apt/": "Campanha de intrusão sustentada",
    "/glossario/catalogo.json": '"terms"',
    "/llms.txt": "sitemap.xml",
    "/sitemap.xml": "/artigos/resposta-a-ransomware-em-empresas/",
    "/favicon.png": None,
    "/seo-release.json": 'seo-reading-paths-2026-10-19',
    "/recursos/": 'Conhecimento que vira',
    "/recursos/calculadora-mttd-mttr/": 'metrics-form',
    "/recursos/modelo-plano-resposta-incidentes/": 'plan-form',
    "/recursos/simulador-tabletop-ransomware/": 'tabletop-scenario',
    "/en/incident-response-resources/": 'Incident response',
    "/en/mttd-mttr-calculator/": 'Calculate metrics',
    "/metric-report.mjs": 'createMetricsReport',
    "/feed.xml": '<rss',
    "/imprensa/": 'Referências para pesquisa e resenhas',
}
for edition, isbn in [('impresso', '9786560961135'), ('ebook', '9786560961128')]:
    for extension in ['ris', 'bib', 'json']:
        checks[f'/referencias/confronto-cibernetico-{edition}.{extension}'] = isbn
for language in ['pt', 'en', 'es', 'fr', 'de', 'he', 'zh', 'ja']:
    checks[f'/autor/{language}/'] = 'data-hiago-inventor'
for path, expected in checks.items():
    for attempt in range(5):
        try:
            response = subprocess.run(
                ["curl", "--fail", "--silent", "--show-error", "--location", "--max-time", "15", base + path],
                capture_output=True,
                check=True,
            )
            if expected:
                assert expected.encode() in response.stdout, f"Conteúdo inesperado em {path}"
            if path == '/seo-release.json':
                expected_release = json.loads((Path(__file__).resolve().parent / 'frontend/dist/seo-release.json').read_text())
                assert json.loads(response.stdout) == expected_release, 'Recibo produtivo diferente do build local'
            print(f"OK: {base}{path}")
            break
        except Exception:
            if attempt == 4:
                raise
            time.sleep(3)
