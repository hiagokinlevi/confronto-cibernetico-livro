# Cloudflare Workers

O frontend em `frontend/` é gerado com Astro e servido pelo Cloudflare Workers Static Assets. O backend em `backend/` é um Python Worker com metadados editoriais públicos em `/book` e um teste em `/health`.

- Site em teste: https://confronto-cibernetico-web.dcpthost.workers.dev/
- API em teste: https://confronto-cibernetico-api.dcpthost.workers.dev/book
- Domínios preparados: `confrontocibernetico.com.br`, `www.confrontocibernetico.com.br` e `api.confrontocibernetico.com.br`.

## Frontend

```sh
cd frontend
npm install
npm run build
npx wrangler deploy
```

## Backend

```sh
cd backend
uv sync
uv run pywrangler dev
uv run pywrangler deploy
```

Após a ativação da zona `confrontocibernetico.com.br` na conta DECRIPTE, associe o domínio ao frontend e `api.confrontocibernetico.com.br` ao backend. O site atual permanece publicado até a migração. Depois, atualize os URLs canônicos nas páginas de apoio e solicite a indexação do novo domínio.
