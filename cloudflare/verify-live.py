#!/usr/bin/env python3
"""Check the published Cloudflare site after a local deploy."""
import subprocess
import time

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
}
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
            print(f"OK: {base}{path}")
            break
        except Exception:
            if attempt == 4:
                raise
            time.sleep(3)
