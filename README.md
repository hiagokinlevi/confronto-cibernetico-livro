# Confronto Cibernético

Site de divulgação do livro **Confronto Cibernético: Técnicas e táticas de enfrentamento e resposta a ameaças persistentes avançadas (APTs)**, de Hiago Kin Levi, publicado pela Editora Brasport.

O livro discute resposta a incidentes cibernéticos, APTs, análise forense, inteligência tática e coordenação de equipes.

- [Página principal do livro](https://confrontocibernetico.com.br/)
- [Trechos temáticos da versão original](https://confrontocibernetico.com.br/capitulos/)
- [Kit de imprensa](https://confrontocibernetico.com.br/imprensa/)
- [Espelho no GitHub Pages](https://hiagokinlevi.github.io/confronto-cibernetico-livro/)
- [Livro impresso na Brasport](https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758)
- [E-book no Google Play](https://play.google.com/store/books/details?id=jSwXEgAAQBAJ)
- [E-book na Amazon](https://www.amazon.com.br/dp/B0HM9QCGHB)

Contato para imprensa: formulário em https://confrontocibernetico.com.br/imprensa/#contato

O site principal é gerado com Astro e publicado no Cloudflare Workers. A API de metadados usa Python Workers. O conteúdo deste repositório também é sincronizado para GitHub Pages; as páginas indicam o domínio principal como URL canônica.

O formulário de contato da página inicial e do kit usa Cloudflare Turnstile e envia mensagens pelo Worker em Python. O Worker valida o token antes de usar o Resend. As configurações privadas `TURNSTILE_SECRET`, `RESEND_API_KEY` e `CONTACT_TO_EMAIL` ficam como secrets no Worker; os valores não pertencem ao código nem ao Git. O site aceita envios nas origens do domínio principal, Workers e GitHub Pages.

Para atualizar o espelho depois de editar o frontend:

```sh
cd cloudflare/frontend
npm run build
cd ../..
python3 cloudflare/sync-github-pages.py
```

Os PDFs e DOCX do manuscrito não são publicados no repositório. Somente trechos selecionados aparecem nas páginas de leitura.
O manuscrito fornecido pelo autor tem 418 páginas e 11 capítulos; a edição publicada pela Brasport tem 300 páginas e 8 capítulos. As páginas de trechos indicam essa diferença até que seja possível confrontá-las com o arquivo final da editora.
