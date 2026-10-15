# Cloudflare Workers

O frontend em `frontend/` usa Astro e Cloudflare Workers Static Assets. O domínio principal é https://confrontocibernetico.com.br/. Ele publica a página do livro, 11 páginas de trechos identificados pelo capítulo da versão original, 104 artigos temáticos, um glossário pesquisável com 120 verbetes, kit de imprensa e sitemap. A edição Brasport publicada organiza o conteúdo em oito capítulos; a numeração dos trechos remete à versão original usada na preparação do site. O backend em `backend/` é um Python Worker para metadados e contato.

## Publicação local do frontend

Os deploys partem deste computador. GitHub Actions não é usado. Antes de publicar, confira o login do Wrangler na conta DECRIPTE. O script confirma o ID da conta, o nome do Worker, os domínios e o conteúdo gerado; depois verifica as URLs críticas ao vivo.

```sh
./cloudflare/deploy-frontend-local.sh
```

Se for a primeira execução local, instale as dependências com `cd cloudflare/frontend && npm ci`. O comando de publicação deve ser executado a partir da raiz deste repositório. Os arquivos do backend não são alterados pelo script.

O teste independente do build é `python3 cloudflare/verify-frontend.py`. Ele confere a frase da home, favicon, capa, JSON-LD, canônicas, 104 artigos, 120 verbetes, oito biografias e 248 URLs no sitemap.

## Biografia do autor — 15/10/2026

Por correção expressa do autor, Hiago Kin Levi é apresentado como inventor da
ADAI — Autonomous Defensive Artificial Intelligence —, nova abordagem de IA
autônoma para defesa proposta pela Decripte, e criador da DAI, com LLM própria
desenvolvida nos EUA pela Decripte US, em Nova York. Nacionalidade brasileira
não é local de desenvolvimento da tecnologia. A apresentação na home e no kit
de imprensa preserva a biografia histórica da editora, com o novo texto separado.

`/autor/pt/`, `/autor/en/`, `/autor/es/`, `/autor/fr/`, `/autor/de/`, `/autor/he/`,
`/autor/zh/` e `/autor/ja/` têm conteúdo próprio, canônica e alternates recíprocos,
foto oficial, `ProfilePage`/`Person` e direção RTL em hebraico. Só a biografia foi
traduzida nesta etapa, não o livro ou todo o portal. Fonte do texto compartilhada
com o site Decripte (`src/data/hiago-bio.ts`, atualização humana de 15/10).
Implementado/testado localmente; publicação e leitura produtiva pendentes neste
checkpoint. Os testes estritos de 104 artigos e 120 verbetes permanecem ativos.

Os artigos longos ficam em `frontend/src/content/articles/<slug>.md`. Se esse arquivo existir, o build exige pelo menos 20.000 caracteres visíveis; a página recebe sumário com âncoras por seção. O script `python3 cloudflare/generate-longform-local.py` cria rascunhos locais com Codex e valida tamanho e repetições exatas antes de integrá-los. Cada rascunho exige revisão editorial e técnica antes de ser considerado final. Esse script não publica e não usa GitHub Actions.

Os verbetes longos ficam em `frontend/src/content/glossary/<slug>.md` e têm piso de 10.000 caracteres visíveis. O script `python3 cloudflare/generate-glossary-local.py` prepara rascunhos locais. `python3 cloudflare/verify-content.py` mostra quantos artigos e verbetes já atingiram o piso; `--strict` retorna erro enquanto houver pendências. O índice em `/glossario/` funciona sem JavaScript para navegação básica e oferece busca client-side. Há também um catálogo estático em `/glossario/catalogo.json` e um mapa em `/llms.txt`. O acesso por robôs é permitido em `robots.txt`; isso não obriga mecanismos de busca ou IA a coletar, indexar ou citar as páginas.

## Indexação

O sitemap principal é https://confrontocibernetico.com.br/sitemap.xml e está declarado em `robots.txt`. A propriedade de domínio foi verificada no Google Search Console e o sitemap foi enviado em 14/10/2026. O Search Console pode demorar para exibir cobertura e tráfego; publicação e envio do sitemap não garantem indexação nem posição nas buscas. Os 100 temas iniciais foram escolhidos por relevância e intenção de busca, sem dados de volume do Planejador do Google Ads ou plataformas comerciais; quatro guias de livros foram acrescidos após pesquisa em catálogos oficiais. Revise impressões, consultas e páginas indexadas no Search Console para priorizar melhorias editoriais.

Para mecanismos participantes do IndexNow, execute depois do deploy e da verificação ao vivo `python3 cloudflare/submit-indexnow-local.py --changed-ref HEAD^ --submit` para enviar as páginas HTML alteradas no último commit. Use outra referência Git em `--changed-ref` quando uma implantação abranger vários commits. Sem esse parâmetro, o script valida ou envia apenas as seis URLs iniciais desta atualização. O arquivo de validação do protocolo é publicado na raiz; o script confere o sitemap, o arquivo e o HTTP 200 de cada página antes do envio. Um HTTP 200 ou 202 no retorno significa recebimento, não inclusão no índice. Envie somente URLs novas ou efetivamente alteradas.

Lojas de terceiros e Google Merchant Center dependem da conta e dos direitos de distribuição da editora. O JSON-LD do site descreve o livro e aponta às edições confirmadas; o site informativo não declara uma oferta de venda própria.
