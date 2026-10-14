(() => {
  const input = document.querySelector('#article-search');
  if (!input) return;
  const cards = [...document.querySelectorAll('.article-card')];
  const sections = [...document.querySelectorAll('.article-category')];
  const count = document.querySelector('#article-result-count');
  const empty = document.querySelector('#article-no-results');
  const reset = document.querySelector('#article-search-reset');
  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

  const update = () => {
    const words = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const card of cards) {
      const matches = words.every((word) => normalize(card.textContent).includes(word));
      card.hidden = !matches;
      if (matches) visible += 1;
    }
    for (const section of sections) {
      section.hidden = !section.querySelector('.article-card:not([hidden])');
    }
    count.textContent = `${visible} ${visible === 1 ? 'artigo encontrado' : 'artigos encontrados'}`;
    empty.hidden = visible !== 0;
    reset.hidden = !input.value;
  };

  input.addEventListener('input', update);
  reset.addEventListener('click', () => {
    input.value = '';
    update();
    input.focus();
  });
  update();
})();
