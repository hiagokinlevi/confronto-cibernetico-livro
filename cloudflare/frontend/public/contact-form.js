document.querySelectorAll('[data-contact-form]').forEach((form) => {
  const feedback = form.querySelector('[data-contact-feedback]');
  const submit = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    if (!values['cf-turnstile-response']) {
      feedback.textContent = 'Conclua a verificação de segurança antes de enviar.';
      feedback.dataset.state = 'error';
      return;
    }
    submit.disabled = true;
    feedback.textContent = 'Enviando sua mensagem…';
    feedback.dataset.state = 'pending';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || 'send_failed');
      form.reset();
      feedback.textContent = 'Mensagem enviada. Obrigado pelo contato!';
      feedback.dataset.state = 'success';
    } catch {
      feedback.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
      feedback.dataset.state = 'error';
    } finally {
      submit.disabled = false;
      if (window.turnstile) window.turnstile.reset(form.querySelector('.cf-turnstile'));
    }
  });
});
