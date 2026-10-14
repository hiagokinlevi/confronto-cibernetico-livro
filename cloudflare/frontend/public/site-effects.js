(() => {
  const progress = document.querySelector('.scroll-progress span');
  const backToTop = document.querySelector('.back-to-top');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.mobile-menu nav a').forEach((link) => {
    link.addEventListener('click', () => {
      link.closest('details').open = false;
    });
  });

  let scheduled = false;
  const updateScroll = () => {
    scheduled = false;
    const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const amount = Math.min(1, Math.max(0, window.scrollY / range));
    if (progress) progress.style.transform = `scaleX(${amount})`;
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 560);
  };

  const scheduleScrollUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateScroll);
    }
  };

  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
  window.addEventListener('pageshow', scheduleScrollUpdate);
  updateScroll();

  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    '.intro-grid, .chapters-header, .chapter-list .chapter, .faq-grid article, ' +
    '.author-grid, .buy-grid .edition, .press, .reading-list .reading-card, ' +
    '.chapter-copy, .book-excerpt, .chapter-next a, .press-kit h2, ' +
    '.press-kit .asset-grid a'
  );

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

  for (const element of targets) {
    // Keep content already in view visible, including when opening an anchored URL.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) continue;
    element.setAttribute('data-reveal', '');
    observer.observe(element);
  }

  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    for (const element of targets) element.classList.add('is-visible');
  });
})();
