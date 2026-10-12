"""Copy the Astro build into this repository's GitHub Pages project path.

The Cloudflare domain remains canonical. GitHub Pages is a public mirror at a
project subpath, so local absolute asset/navigation URLs need a prefix.
"""

from pathlib import Path
import shutil

root = Path(__file__).resolve().parent.parent
source = root / "cloudflare" / "frontend" / "dist"
prefix = "/confronto-cibernetico-livro"

if not (source / "index.html").exists():
    raise SystemExit("Build the Astro frontend before syncing GitHub Pages")

for item in source.rglob("*"):
    if not item.is_file() or item.name in {"robots.txt", "sitemap.xml"}:
        continue
    relative = item.relative_to(source)
    target = root / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    if item.suffix == ".html":
        html = item.read_text(encoding="utf-8")
        html = html.replace('href="/', f'href="{prefix}/')
        html = html.replace('src="/', f'src="{prefix}/')
        target.write_text(html, encoding="utf-8")
    else:
        shutil.copy2(item, target)

# Preserve the legacy press-kit URL already shared from GitHub Pages.
(root / "imprensa.html").write_text(
    (root / "imprensa" / "index.html").read_text(encoding="utf-8"),
    encoding="utf-8",
)
