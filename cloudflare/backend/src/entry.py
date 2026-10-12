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
}


class Default(WorkerEntrypoint):
    async def fetch(self, request):
        path = urlparse(request.url).path.rstrip("/") or "/"
        if path in ("/book", "/api/book"):
            return Response.json(BOOK, headers={"Cache-Control": "public, max-age=3600"})
        if path in ("/health", "/api/health"):
            return Response.json({"status": "ok"})
        return Response.json({"error": "not_found"}, status=404)
