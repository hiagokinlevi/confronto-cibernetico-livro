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

**Revisão final verificada às 14h43 NY:** PR #3, fonte
`ebdf48ab960d9fcc49e9e373b2d6ff3cffd79777`, versão Worker
`d0cde1be-e0cc-40b1-acf0-4003a90178d5`, deployment
`a7505412-3008-455a-bec9-515cf1a50a30`. A frase curta em chinês foi clarificada,
sem alterar o significado, e as oito páginas/recibo produtivo foram reconferidos
pelo publicador local. Os identificadores abaixo registram a primeira implantação.

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
Implementado/testado/implantado/verificado em operação em 15/10/2026. PR #1,
fonte `f76fe63654d72332cba0ab9f57daf3a540b3df69`, Worker versão
`fdc9b836-58da-429e-a13c-71f5624d2759`, deployment
`533021a8-4c73-4534-adc8-a84a94870260`. Marcador de build confirmado no domínio
principal e www, oito páginas de autor verificadas por HTTP e navegação no
navegador interno, fotos carregadas, RTL e ausência de overflow. Home, imprensa,
glossário, artigos e sitemap responderam corretamente. Os testes estritos de
104 artigos e 120 verbetes permanecem ativos. Atualização do índice Google ainda
não comprovada; este seguimento documental não modifica o artefato publicado.
O artefato estático `/biography-release.json` registra o commit local de build,
sem credenciais. Após a publicação, comparar esse commit com o revisado e conferir
a versão/deployment ativo do Worker no provedor, além das oito páginas ao vivo.

Os artigos longos ficam em `frontend/src/content/articles/<slug>.md`. Se esse arquivo existir, o build exige pelo menos 20.000 caracteres visíveis; a página recebe sumário com âncoras por seção. O script `python3 cloudflare/generate-longform-local.py` cria rascunhos locais com Codex e valida tamanho e repetições exatas antes de integrá-los. Cada rascunho exige revisão editorial e técnica antes de ser considerado final. Esse script não publica e não usa GitHub Actions.

Os verbetes longos ficam em `frontend/src/content/glossary/<slug>.md` e têm piso de 10.000 caracteres visíveis. O script `python3 cloudflare/generate-glossary-local.py` prepara rascunhos locais. `python3 cloudflare/verify-content.py` mostra quantos artigos e verbetes já atingiram o piso; `--strict` retorna erro enquanto houver pendências. O índice em `/glossario/` funciona sem JavaScript para navegação básica e oferece busca client-side. Há também um catálogo estático em `/glossario/catalogo.json` e um mapa em `/llms.txt`. O acesso por robôs é permitido em `robots.txt`; isso não obriga mecanismos de busca ou IA a coletar, indexar ou citar as páginas.

## Indexação

### Revisão editorial e navegação — 19/10/2026

`frontend/src/data/editorial.ts` define 20 guias prioritários com título curto,
descrição e apresentação próprios, além de 16 snippets de glossário escolhidos
por relevância e pelas primeiras impressões observadas no Search Console.
Os seis percursos em `/artigos/` ligam objetivos de leitura a guias existentes;
a home destaca três deles. Recomendações dos artigos consideram o percurso,
capítulo e proximidade de assunto. Capítulos agora apontam também para os guias
do seu tema. As URLs originais e o total de 248 páginas no sitemap são mantidos.

As descrições de artigos e verbetes são completas ou abreviadas no limite de
palavra, com o mesmo texto em meta description e Open Graph. `lastmod` indica
a data desta revisão somente nas páginas selecionadas; não é gerado pela data
do build. Os títulos personalizados continuam sujeitos ao limite local de
55 caracteres. A definição de prioridades não representa pesquisa de volumes
de busca ou garantia de posição.

`python3 cloudflare/verify-seo-navigation.py` confere destinos e âncoras internas
nas 248 páginas, os snippets, os 20 resumos e os seis percursos. A verificação
integra o publicador local. `/seo-release.json` identifica o commit do build;
`verify-live.py` exige o mesmo recibo no domínio após o deploy. O espelho do
GitHub é atualizado com `python3 cloudflare/sync-github-pages.py` após validar
o build e permanece com canônicas para o domínio oficial.

O sitemap principal é https://confrontocibernetico.com.br/sitemap.xml e está declarado em `robots.txt`. A propriedade de domínio foi verificada no Google Search Console e o sitemap foi enviado em 14/10/2026. O Search Console pode demorar para exibir cobertura e tráfego; publicação e envio do sitemap não garantem indexação nem posição nas buscas. Os 100 temas iniciais foram escolhidos por relevância e intenção de busca, sem dados de volume do Planejador do Google Ads ou plataformas comerciais; quatro guias de livros foram acrescidos após pesquisa em catálogos oficiais. Revise impressões, consultas e páginas indexadas no Search Console para priorizar melhorias editoriais.

Para mecanismos participantes do IndexNow, execute depois do deploy e da verificação ao vivo `python3 cloudflare/submit-indexnow-local.py --changed-ref HEAD^ --submit` para enviar as páginas HTML alteradas no último commit. Use outra referência Git em `--changed-ref` quando uma implantação abranger vários commits. Sem esse parâmetro, o script valida ou envia apenas as seis URLs iniciais desta atualização. O arquivo de validação do protocolo é publicado na raiz; o script confere o sitemap, o arquivo e o HTTP 200 de cada página antes do envio. Um HTTP 200 ou 202 no retorno significa recebimento, não inclusão no índice. Envie somente URLs novas ou efetivamente alteradas.

Lojas de terceiros e Google Merchant Center dependem da conta e dos direitos de distribuição da editora. O JSON-LD do site descreve o livro e aponta às edições confirmadas; o site informativo não declara uma oferta de venda própria.
