# Confronto Cibernético

Site de divulgação do livro **Confronto Cibernético: Técnicas e táticas de enfrentamento e resposta a ameaças persistentes avançadas (APTs)**, de Hiago Kin Levi, publicado pela Editora Brasport.

O livro discute resposta a incidentes cibernéticos, APTs, análise forense, inteligência tática e coordenação de equipes.

- [Página principal do livro](https://confrontocibernetico.com.br/)
- [Trechos por capítulo](https://confrontocibernetico.com.br/capitulos/)
- [Kit de imprensa](https://confrontocibernetico.com.br/imprensa/)
- [Espelho no GitHub Pages](https://hiagokinlevi.github.io/confronto-cibernetico-livro/)
- [Livro impresso na Brasport](https://www.editorabrasport.com.br/index.php?route=product/product&product_id=1758)
- [E-book no Google Play](https://play.google.com/store/books/details?id=jSwXEgAAQBAJ)
- [E-book na Amazon](https://www.amazon.com.br/dp/B0HM9QCGHB)

Contato para imprensa: hiago@decripte.com.br

O site principal é gerado com Astro e publicado no Cloudflare Workers. A API de metadados usa Python Workers. O conteúdo deste repositório também é sincronizado para GitHub Pages; as páginas indicam o domínio principal como URL canônica.

Para atualizar o espelho depois de editar o frontend:

```sh
cd cloudflare/frontend
npm run build
cd ../..
python3 cloudflare/sync-github-pages.py
```

Os PDFs e DOCX do manuscrito não são publicados no repositório. Somente trechos selecionados aparecem nas páginas de leitura.
