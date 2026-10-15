#!/usr/bin/env python3
"""Notify IndexNow about explicitly changed, live book-site URLs."""
import argparse
import json
from pathlib import Path
import subprocess
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

BASE = "https://confrontocibernetico.com.br"
ROOT = Path(__file__).resolve().parent / "frontend"
CHANGED_PATHS = (
    "/",
    "/artigos/",
    "/artigos/top-10-livros-de-resposta-a-incidentes/",
    "/artigos/top-10-livros-de-seguranca-da-informacao/",
    "/artigos/top-10-livros-de-cybersecurity/",
    "/artigos/top-10-livros-de-seguranca-digital/",
)


def read_url(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; ConfrontoCibernetico/1.0; +https://confrontocibernetico.com.br/)"})
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.status, response.read()


def changed_paths_from_git(reference):
    repo = ROOT.parent.parent
    result = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=AM", reference, "HEAD", "--", "*.html"],
        cwd=repo, text=True, capture_output=True, check=True,
    )
    paths = set()
    for filename in result.stdout.splitlines():
        path = Path(filename)
        if path == Path("index.html"):
            paths.add("/")
        elif path.name == "index.html" and path.parts[0] in ("artigos", "glossario"):
            paths.add("/" + "/".join(path.parts[:-1]) + "/")
    assert paths, "Nenhuma página alterada encontrada no commit"
    return tuple(sorted(paths))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--submit", action="store_true", help="enviar as URLs alteradas; sem este parâmetro apenas valida localmente")
    parser.add_argument("--changed-ref", help="obter páginas HTML alteradas no Git desde esta referência até HEAD")
    args = parser.parse_args()

    files = list((ROOT / "public").glob("indexnow-*.txt"))
    assert len(files) == 1, "Esperado exatamente um arquivo IndexNow"
    key_file = files[0]
    key = key_file.read_text(encoding="utf-8").strip()
    assert key_file.name == f"indexnow-{key}.txt" and len(key) >= 8

    sitemap = ET.parse(ROOT / "dist" / "sitemap.xml")
    indexed_urls = {item.text for item in sitemap.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")}
    changed_paths = changed_paths_from_git(args.changed_ref) if args.changed_ref else CHANGED_PATHS
    urls = [BASE + path for path in changed_paths]
    assert all(url in indexed_urls for url in urls), "URL alterada ausente do sitemap"
    print(f"Verificação local: {len(urls)} URLs alteradas no sitemap; destino api.indexnow.org.")
    if not args.submit:
        return

    key_location = f"{BASE}/{key_file.name}"
    status, body = read_url(key_location)
    assert status == 200 and body.decode("utf-8").strip() == key, "Arquivo de verificação indisponível no domínio"
    for url in urls:
        status, _ = read_url(url)
        assert status == 200, f"URL indisponível: {url}"

    payload = json.dumps({"host": "confrontocibernetico.com.br", "key": key, "keyLocation": key_location, "urlList": urls}).encode("utf-8")
    request = urllib.request.Request("https://api.indexnow.org/indexnow", data=payload, headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": "ConfrontoCibernetico/1.0"}, method="POST")
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            code = response.status
    except urllib.error.HTTPError as error:
        raise SystemExit(f"IndexNow recusou o envio: HTTP {error.code}") from None
    assert code in (200, 202), f"Resposta inesperada: HTTP {code}"
    print(f"IndexNow recebeu {len(urls)} URLs (HTTP {code}); o recebimento não garante indexação.")


if __name__ == "__main__":
    main()
