#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
frontend_dir="$project_dir/frontend"
expected_account="1e04c78c6d0084600ddb4589c4e3327c"
expected_worker="confronto-cibernetico-web"

cd "$frontend_dir"
python3 - "$expected_worker" <<'PY'
import json, pathlib, sys
config = json.loads(pathlib.Path("wrangler.jsonc").read_text())
assert config["name"] == sys.argv[1], "Worker inesperado"
routes = {item["pattern"] for item in config["routes"]}
assert routes == {"confrontocibernetico.com.br", "www.confrontocibernetico.com.br"}, "Rotas inesperadas"
print("Destino validado: Cloudflare Worker do livro, domínios principal e www.")
PY

whoami="$(npx wrangler whoami)"
if [[ "$whoami" != *"$expected_account"* ]]; then
  echo "Conta Cloudflare divergente; deploy interrompido." >&2
  exit 1
fi
export CLOUDFLARE_ACCOUNT_ID="$expected_account"

npm run build
python3 "$project_dir/verify-content.py" --strict
python3 "$project_dir/verify-frontend.py" --strict-content
python3 "$project_dir/verify-seo-navigation.py"
npx wrangler deploy
python3 "$project_dir/verify-live.py"
