document.addEventListener('DOMContentLoaded', () => {
  const allFooters = Array.from(document.querySelectorAll('footer.site-footer, footer, .footer, #footer'));
  // Keep the #global-footer; remove others
  allFooters.forEach(el => {
    if (el.id !== 'global-footer') {
      // If it's not the canonical footer and contains the same copyright text, remove it
      const text = (el.textContent || '').trim();
      if (text.includes('کلیه حقوق') || el.matches('.site-footer')) el.remove();
    }
  });
});
