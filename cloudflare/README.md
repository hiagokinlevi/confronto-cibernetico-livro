# Cloudflare Workers

O frontend em `frontend/` é gerado com Astro e servido pelo Cloudflare Workers Static Assets. Ele oferece 11 páginas estáticas de leitura, cada uma com título, descrição e URL canônica próprios. O backend em `backend/` é um Python Worker com metadados editoriais em `/book`, índice dos capítulos em `/chapters` e teste em `/health`.

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

Os três domínios personalizados já estão associados aos Workers. Após a ativação da delegação DNS no Registro.br, verifique HTTPS e os endpoints, envie `https://confrontocibernetico.com.br/sitemap.xml` ao Google Search Console e atualize as páginas de apoio para apontar ao domínio principal.
