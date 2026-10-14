# Confronto Cibernético

Site de divulgação do livro **Confronto Cibernético: Técnicas e táticas de enfrentamento e resposta a ameaças persistentes avançadas (APTs)**, de Hiago Kin Levi, publicado pela Editora Brasport.

O livro discute resposta a incidentes cibernéticos, APTs, análise forense, inteligência tática e coordenação de equipes.

- [Página principal do livro](https://confrontocibernetico.com.br/)
- [Trechos temáticos da versão original](https://confrontocibernetico.com.br/capitulos/)
- [100 artigos temáticos](https://confrontocibernetico.com.br/artigos/)
- [Glossário técnico com 120 verbetes](https://confrontocibernetico.com.br/glossario/)
- [Kit de imprensa](https://confrontocibernetico.com.br/imprensa/)
- [Espelho no GitHub Pages](https://hiagokinlevi.github.io/confronto-cibernetico-livro/)
- [Livro impresso na Brasport](https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758)
- [E-book no Google Play](https://play.google.com/store/books/details?id=jSwXEgAAQBAJ)
- [E-book na Amazon](https://www.amazon.com.br/dp/B0HM9QCGHB)

Contato para imprensa: formulário em https://confrontocibernetico.com.br/imprensa/#contato

O site principal é gerado com Astro e publicado no Cloudflare Workers. A API de metadados usa Python Workers. O conteúdo deste repositório também é sincronizado para GitHub Pages; as páginas indicam o domínio principal como URL canônica.

O frontend inclui favicon, imagem de capa em Open Graph, dados estruturados `WebSite`, `Book`, `Article`, `DefinedTermSet` e `DefinedTerm`, além de um sitemap com 236 URLs. Cada um dos 100 artigos tem pelo menos 20.000 caracteres visíveis e cada um dos 120 verbetes tem pelo menos 10.000. As páginas têm URLs estáticas, canônicas e links internos; `robots.txt`, `/llms.txt` e `/glossario/catalogo.json` facilitam a descoberta. A seleção de temas foi feita por relevância e intenção de busca; não há medição de volume de palavras-chave. Publicar o sitemap não garante indexação ou posição nas buscas.

O formulário de contato da página inicial e do kit usa Cloudflare Turnstile e envia mensagens pelo Worker em Python. O Worker valida o token antes de usar o Resend. As configurações privadas `TURNSTILE_SECRET`, `RESEND_API_KEY` e `CONTACT_TO_EMAIL` ficam como secrets no Worker; os valores não pertencem ao código nem ao Git. O site aceita envios nas origens do domínio principal, Workers e GitHub Pages.

Para validar e publicar no Cloudflare a partir do computador local:

```sh
./cloudflare/deploy-frontend-local.sh
```

Para atualizar o espelho no GitHub Pages depois de editar o frontend:

```sh
cd cloudflare/frontend
npm run build
cd ../..
python3 cloudflare/sync-github-pages.py
```

O repositório tem GitHub Actions desativado. Nenhum workflow é usado para build, deploy ou agendamento. A sincronização e o push do espelho são manuais.

Os PDFs e DOCX do manuscrito não são publicados no repositório. Somente trechos selecionados aparecem nas páginas de leitura.
O manuscrito fornecido pelo autor tem 418 páginas e 11 capítulos; a edição publicada pela Brasport tem 300 páginas e 8 capítulos. As páginas de trechos indicam essa diferença até que seja possível confrontá-las com o arquivo final da editora.
