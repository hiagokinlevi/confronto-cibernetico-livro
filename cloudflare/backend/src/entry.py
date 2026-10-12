from urllib.parse import urlparse

from workers import Response, WorkerEntrypoint

BOOK = {
    "title": "Confronto Cibernético: Técnicas e táticas de enfrentamento e resposta a ameaças persistentes avançadas (APTs)",
    "author": "Hiago Kin Levi",
    "publisher": "Editora Brasport",
    "language": "pt-BR",
    "subjects": [
        "resposta a incidentes cibernéticos",
        "segurança cibernética",
        "ameaças persistentes avançadas",
        "análise forense",
        "inteligência tática",
    ],
    "editions": [
        {
            "format": "printed",
            "isbn": "9786560961135",
            "pages": 300,
            "announcedPublicationDate": "2026-10-27",
            "url": "https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758",
        },
        {
            "format": "ebook",
            "isbn": "9786560961128",
            "url": "https://play.google.com/store/books/details?id=jSwXEgAAQBAJ",
        },
    ],
    "website": "https://confrontocibernetico.com.br/",
    "pressContact": "hiago@decripte.com.br",
    "chaptersUrl": "https://confrontocibernetico.com.br/capitulos/",
}

CHAPTERS = [
    ("o-que-e-uma-apt", "O que é uma APT? Ameaças persistentes avançadas"),
    ("fases-resposta-incidentes-nist", "Fases da resposta a incidentes cibernéticos e NIST"),
    ("confronto-cibernetico-resposta-proativa", "Confronto cibernético: resposta proativa a APTs"),
    ("limitacoes-resposta-tradicional-apts", "Resposta tradicional e APTs: onde estão os limites?"),
    ("black-team-red-blue-inteligencia", "Black Team: integração de Red Team, Blue Team e inteligência"),
    ("identificacao-sinais-apt-incidente", "Como identificar sinais de atividade APT em um incidente"),
    ("estrutura-equipe-black-team", "Como estruturar um Black Team de resposta a incidentes"),
    ("contencao-erradicacao-recuperacao", "Contenção, erradicação e recuperação após uma intrusão"),
    ("metricas-mttd-mttr-resposta-apts", "MTTD, MTTR e métricas de resposta a incidentes APT"),
    ("analise-pos-incidente-melhoria-continua", "Análise pós-incidente e melhoria contínua em cibersegurança"),
    ("referencias-nist-mitre-apt", "Referências para estudar APTs, NIST e MITRE ATT&CK"),
]

def chapter_record(item, number):
    slug, title = item
    return {
        "number": number,
        "slug": slug,
        "title": title,
        "url": f"https://confrontocibernetico.com.br/capitulos/{slug}/",
    }


class Default(WorkerEntrypoint):
    async def fetch(self, request):
        path = urlparse(request.url).path.rstrip("/") or "/"
        if path in ("/book", "/api/book"):
            return Response.json(BOOK, headers={"Cache-Control": "public, max-age=3600"})
        if path in ("/chapters", "/api/chapters"):
            return Response.json(
                {"chapters": [chapter_record(item, i) for i, item in enumerate(CHAPTERS, 1)]},
                headers={"Cache-Control": "public, max-age=3600"},
            )
        slug = path.removeprefix("/api/chapters/").removeprefix("/chapters/")
        if path.startswith(("/chapters/", "/api/chapters/")):
            for i, item in enumerate(CHAPTERS, 1):
                if item[0] == slug:
                    return Response.json(chapter_record(item, i), headers={"Cache-Control": "public, max-age=3600"})
            return Response.json({"error": "not_found"}, status=404)
        if path in ("/health", "/api/health"):
            return Response.json({"status": "ok"})
        return Response.json({"error": "not_found"}, status=404)
