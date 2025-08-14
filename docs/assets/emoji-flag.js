(function () {
  function setImg(node, src) {
    const alt = node.getAttribute('aria-label') || 'IR flag';
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = 20;
    img.height = 20;
    img.setAttribute('loading', 'lazy');
    img.className = 'emoji-flag-img flag-img-fix';
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
      const local = '/assets/flags/ir.svg';
      if (await localExists(local)) { setImg(node, local); continue; }
      const inline = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0RBMDAwMSIgZD0iTTAgMjdjMCAyLjIwOSAxLjc5MSA0IDQgNGgyOGMyLjIwOSAwIDQtMS43OTEgNC00di00SDB2NHoiLz48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMCAxM2gzNnYxMEgweiIvPjxwYXRoIGZpbGw9IiMyMzlGNDAiIGQ9Ik0zNiAxM1Y5YzAtMi4yMDktMS43OTEtNC00LTRINEMxLjc5MSA1IDAgNi43OTEgMCA5djRoMzZ6Ii8+PHBhdGggZmlsbD0iI0U5NjY2NyIgZD0iTTAgMjNoMzZ2MUgweiIvPjxnIGZpbGw9IiNCRTE5MzEiPjxwYXRoIGQ9Ik0xOS40NjUgMTQuOTY5Yy45NTcuNDkgMy4wMzggMi45NTMuNzk4IDUuNzMxIDEuMzkxLS4zMDggMy4xNjItNC40MDgtLjc5OC01LjczMXptLTIuOTM3IDBjLTMuOTU5IDEuMzIzLTIuMTg5IDUuNDIzLS43OTggNS43MzEtMi4yNC0yLjc3OC0uMTU5LTUuMjQxLjc5OC01LjczMXptMS40NTMtLjE0M2MuMDQuMTk3IDEuMTAxLjQzNi45NzQtLjU3My0uMTY4LjQwOC0uNjU0LjM5Ni0uOTY4LjIwNy0uNDMyLjI0MS0uODM1LjE4Mi0uOTg4LS4yMjctLjE0OC43NTQuNTg3Ljk3NS45ODIuNTkzeiIvPjxwYXRoIGQ9Ik0yMC41MzggMTcuOTA0Yy0uMDE1LTEuMjQ4LS42NzctMi4zNTItMS4zMjktMi43OTkuNDMuNTI3IDEuNzUyIDMuNDM2LS43ODUgNS4zNTFsLjA0Ny01LjA5Ny0uNDc1LS40MTgtLjQ3NS4zOTguMDggNS4xNDYtLjAxOC0uMDE1Yy0yLjU2My0xLjkxNC0xLjIzMy00LjgzNy0uODAyLTUuMzY1LS42NTIuNDQ3LTEuMzE1IDEuNTUxLTEuMzI5IDIuNzk5LS4wMTMgMS4wNzEuNDc3IDIuMjQzIDEuODM0IDMuMjA1LS41NTguMTQ5LTEuMTYyLjIwOC0xLjY3OC4yMDEuNDY0LjI1MyAxLjM0LjE5MiAyLjAwNy4xMzFsLjAwMS4wNjguMzk4LjQzNy40LS40NTV2LS4wNTJjLjY3Mi4wNjIgMS41NjcuMTI5IDIuMDM5LS4xMjgtLjUzMi4wMDgtMS4xNTktLjA1My0xLjczMi0uMjEzIDEuMzQ0LS45NjEgMS44My0yLjEyNyAxLjgxNy0zLjE5NHoiLz48L2c+PHBhdGggZmlsbD0iIzdCQzU4QyIgZD0iTTAgMTJoMzZ2MUgweiIvPjwvc3ZnPg==';
      setImg(node, inline);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
