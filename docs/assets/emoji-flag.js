(function () {
  function setImg(node, src) {
    const alt = node.getAttribute('aria-label') || 'IR flag';
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = 20;
    img.height = 20;
    img.setAttribute('loading', 'lazy');
    img.className = 'emoji-flag-img';
    node.textContent = '';
    node.appendChild(img);
  }

  async function localExists(url) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      return res.ok;
    } catch { return false; }
  }

  function withTwemoji(node) {
    if (!window.twemoji) return false;
    const html = twemoji.parse(node.textContent, {
      folder: 'svg', ext: '.svg',
      base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
      attributes: () => ({
        class: 'emoji-flag-img',
        alt: node.getAttribute('aria-label') || 'IR flag',
        draggable: 'false'
      })
    });
    if (!html) return false;
    node.innerHTML = html;
    return true;
  }

  async function init() {
    const nodes = document.querySelectorAll('.emoji-flag');
    if (!nodes.length) return;

    for (const node of nodes) {
      if (node.querySelector('img.emoji-flag-img')) continue;
      if (withTwemoji(node)) continue;
      const local = '/assets/emoji/1f1ee-1f1f7.svg';
      if (await localExists(local)) { setImg(node, local); continue; }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
