 (function () {
  function setImg(node) {
    const img = document.createElement('img');
    img.src = '/assets/flags/ir.svg';
    img.alt = node.getAttribute('aria-label') || 'IR flag';
    img.width = 20;
    img.height = 20;
    img.loading = 'lazy';
    img.className = 'emoji-flag-img flag-img-fix';
    node.textContent = '';
    node.appendChild(img);
  }

  function init() {
    document.querySelectorAll('.emoji-flag').forEach(node => {
      if (!node.querySelector('img.emoji-flag-img')) {
        setImg(node);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
