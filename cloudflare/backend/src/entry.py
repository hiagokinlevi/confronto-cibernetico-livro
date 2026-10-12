import json
import re
from urllib.parse import urlparse

from workers import Response, WorkerEntrypoint, fetch

ALLOWED_ORIGINS = {
    "https://confrontocibernetico.com.br",
    "https://www.confrontocibernetico.com.br",
    "https://confronto-cibernetico-web.dcpthost.workers.dev",
    "https://hiagokinlevi.github.io",
}
ALLOWED_HOSTNAMES = {
    "confrontocibernetico.com.br",
    "www.confrontocibernetico.com.br",
    "confronto-cibernetico-web.dcpthost.workers.dev",
    "hiagokinlevi.github.io",
}
TOPICS = {
    "imprensa": "Imprensa e entrevistas",
    "evento": "Eventos e palestras",
    "leitor": "Mensagem de leitor",
    "outro": "Outro assunto",
}
EMAIL_RE = re.compile(r"^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$")


def contact_response(data, status, origin):
    return Response.json(
        data,
        status=status,
        headers={
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Cache-Control": "no-store",
            "Vary": "Origin",
        },
    )

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
            "availability": "preorder",
            "url": "https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758",
        },
        {
            "format": "ebook",
            "isbn": "9786560961128",
            "url": "https://play.google.com/store/books/details?id=jSwXEgAAQBAJ",
        },
    ],
    "website": "https://confrontocibernetico.com.br/",
    "pressContactUrl": "https://confrontocibernetico.com.br/imprensa/#contato",
    "chapterExcerptsUrl": "https://confrontocibernetico.com.br/capitulos/",
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
        "chapterNumber": number,
        "sourceVersion": "author_original_version",
        "slug": slug,
        "title": title,
        "url": f"https://confrontocibernetico.com.br/capitulos/{slug}/",
    }


class Default(WorkerEntrypoint):
    async def contact(self, request):
        origin = request.headers.get("Origin") or ""
        if origin not in ALLOWED_ORIGINS:
            return Response.json({"ok": False, "error": "origin_not_allowed"}, status=403)
        if request.method == "OPTIONS":
            return contact_response({"ok": True}, 200, origin)
        if request.method != "POST":
            return contact_response({"ok": False, "error": "method_not_allowed"}, 405, origin)
        if "application/json" not in (request.headers.get("Content-Type") or ""):
            return contact_response({"ok": False, "error": "invalid_content_type"}, 415, origin)
        if int(request.headers.get("Content-Length") or 0) > 12000:
            return contact_response({"ok": False, "error": "message_too_large"}, 413, origin)
        try:
            raw = await request.text()
            if len(raw) > 12000:
                return contact_response({"ok": False, "error": "message_too_large"}, 413, origin)
            body = json.loads(raw)
            if not isinstance(body, dict):
                raise ValueError("Invalid body")
        except (ValueError, TypeError):
            return contact_response({"ok": False, "error": "invalid_request"}, 400, origin)

        if body.get("website"):
            return contact_response({"ok": True}, 200, origin)
        name = str(body.get("name") or "").strip()
        email = str(body.get("email") or "").strip()
        topic = str(body.get("topic") or "")
        message = str(body.get("message") or "").strip()
        token = str(body.get("cf-turnstile-response") or "")
        context = str(body.get("context") or "")
        if not (2 <= len(name) <= 100 and len(email) <= 254 and EMAIL_RE.fullmatch(email)
                and topic in TOPICS and 20 <= len(message) <= 4000 and 0 < len(token) <= 2048):
            return contact_response({"ok": False, "error": "invalid_fields"}, 400, origin)

        try:
            challenge = await fetch(
                "https://challenges.cloudflare.com/turnstile/v0/siteverify",
                method="POST",
                body=json.dumps({"secret": self.env.TURNSTILE_SECRET, "response": token}),
                headers={"Content-Type": "application/json"},
            )
            verdict = await challenge.json()
        except Exception:
            return contact_response({"ok": False, "error": "verification_unavailable"}, 503, origin)
        if not (verdict.get("success") and verdict.get("hostname") in ALLOWED_HOSTNAMES
                and verdict.get("action") == "contact"):
            return contact_response({"ok": False, "error": "verification_failed"}, 400, origin)

        content = (
            f"Contato do site Confronto Cibernético\n\n"
            f"Nome: {name}\nE-mail: {email}\nAssunto: {TOPICS[topic]}\n"
            f"Origem: {context[:50]}\n\nMensagem:\n{message}"
        )
        try:
            sent = await fetch(
                "https://api.resend.com/emails",
                method="POST",
                body=json.dumps({
                    "from": "Confronto Cibernético <contato@decripte.com.br>",
                    "to": [self.env.CONTACT_TO_EMAIL],
                    "reply_to": email,
                    "subject": f"Confronto Cibernético — {TOPICS[topic]}",
                    "text": content,
                }),
                headers={
                    "Authorization": f"Bearer {self.env.RESEND_API_KEY}",
                    "Content-Type": "application/json",
                },
            )
        except Exception:
            return contact_response({"ok": False, "error": "send_unavailable"}, 503, origin)
        if not sent.ok:
            return contact_response({"ok": False, "error": "send_failed"}, 502, origin)
        return contact_response({"ok": True}, 200, origin)

    async def fetch(self, request):
        path = urlparse(request.url).path.rstrip("/") or "/"
        if path in ("/contact", "/api/contact"):
            return await self.contact(request)
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
