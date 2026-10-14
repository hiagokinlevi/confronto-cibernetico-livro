(() => {
  const input = document.querySelector('#glossary-search');
  if (!input) return;
  const cards = [...document.querySelectorAll('.glossary-card')];
  const sections = [...document.querySelectorAll('.glossary-letter')];
  const count = document.querySelector('#glossary-result-count');
  const empty = document.querySelector('#glossary-no-results');
  const reset = document.querySelector('#glossary-search-reset');
  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const update = () => {
    const words = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const card of cards) {
      card.hidden = !words.every((word) => normalize(card.dataset.search).includes(word));
      if (!card.hidden) visible++;
    }
    for (const section of sections) section.hidden = !section.querySelector('.glossary-card:not([hidden])');
    count.textContent = `${visible} ${visible === 1 ? 'verbete encontrado' : 'verbetes encontrados'}`;
    empty.hidden = visible !== 0;
    reset.hidden = !input.value;
  };
  input.addEventListener('input', update);
  reset.addEventListener('click', () => { input.value = ''; update(); input.focus(); });
  update();
})();
