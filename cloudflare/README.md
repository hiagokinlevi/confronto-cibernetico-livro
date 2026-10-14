# Cloudflare Workers

O frontend em `frontend/` usa Astro e Cloudflare Workers Static Assets. O domínio principal é https://confrontocibernetico.com.br/. Ele publica a página do livro, 11 páginas de trechos identificados pelo capítulo da versão original, 100 artigos temáticos, um glossário pesquisável com 120 verbetes, kit de imprensa e sitemap. A edição Brasport publicada organiza o conteúdo em oito capítulos; a numeração dos trechos remete à versão original usada na preparação do site. O backend em `backend/` é um Python Worker para metadados e contato.

## Publicação local do frontend

Os deploys partem deste computador. GitHub Actions não é usado. Antes de publicar, confira o login do Wrangler na conta DECRIPTE. O script confirma o ID da conta, o nome do Worker, os domínios e o conteúdo gerado; depois verifica as URLs críticas ao vivo.

```sh
./cloudflare/deploy-frontend-local.sh
```

Se for a primeira execução local, instale as dependências com `cd cloudflare/frontend && npm ci`. O comando de publicação deve ser executado a partir da raiz deste repositório. Os arquivos do backend não são alterados pelo script.

O teste independente do build é `python3 cloudflare/verify-frontend.py`. Ele confere a frase da home, favicon, capa, JSON-LD, canônicas, 100 artigos, 120 verbetes e 236 URLs no sitemap.

Os artigos longos ficam em `frontend/src/content/articles/<slug>.md`. Se esse arquivo existir, o build exige pelo menos 20.000 caracteres visíveis; a página recebe sumário com âncoras por seção. O script `python3 cloudflare/generate-longform-local.py` cria rascunhos locais com Codex e valida tamanho e repetições exatas antes de integrá-los. Cada rascunho exige revisão editorial e técnica antes de ser considerado final. Esse script não publica e não usa GitHub Actions.

Os verbetes longos ficam em `frontend/src/content/glossary/<slug>.md` e têm piso de 10.000 caracteres visíveis. O script `python3 cloudflare/generate-glossary-local.py` prepara rascunhos locais. `python3 cloudflare/verify-content.py` mostra quantos artigos e verbetes já atingiram o piso; `--strict` retorna erro enquanto houver pendências. O índice em `/glossario/` funciona sem JavaScript para navegação básica e oferece busca client-side. Há também um catálogo estático em `/glossario/catalogo.json` e um mapa em `/llms.txt`. O acesso por robôs é permitido em `robots.txt`; isso não obriga mecanismos de busca ou IA a coletar, indexar ou citar as páginas.

## Indexação

O sitemap principal é https://confrontocibernetico.com.br/sitemap.xml e está declarado em `robots.txt`. A propriedade de domínio foi verificada no Google Search Console e o sitemap foi enviado em 14/10/2026. O Search Console pode demorar para exibir cobertura e tráfego; publicação e envio do sitemap não garantem indexação nem posição nas buscas. Os 100 temas foram escolhidos por relevância e intenção de busca, sem dados de volume do Planejador do Google Ads ou plataformas comerciais. Revise impressões, consultas e páginas indexadas no Search Console para priorizar melhorias editoriais.

Lojas de terceiros e Google Merchant Center dependem da conta e dos direitos de distribuição da editora. O JSON-LD do site descreve o livro e aponta às edições confirmadas; o site informativo não declara uma oferta de venda própria.
