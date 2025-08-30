(function () {
  var existing = document.querySelector('script[data-cld-bundle]');
  if (existing) {
    console.log('[CLD defer] bundle tag already in DOM:', existing.src);
    return;
  }
  if (window.CLD_SAFE && !existing) {
    console.warn('[CLD defer] CLD_SAFE present but bundle tag missing; injecting anyway');
  }

  var candidates = (Array.isArray(window.CLD_BUNDLE_URLS) && window.CLD_BUNDLE_URLS.length)
    ? window.CLD_BUNDLE_URLS
    : [
        '../assets/dist/water-cld.bundle.js?v=3',
        './assets/dist/water-cld.bundle.js?v=3',
        '/assets/dist/water-cld.bundle.js?v=3'
      ];

  function tryLoad(i) {
    if (i >= candidates.length) {
      console.error('[CLD defer] failed to load bundle from all candidates:', candidates);
      return;
    }
    var url = new URL(candidates[i], window.location.href).href;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.setAttribute('data-cld-bundle', 'true');
    s.onload = function () {
      console.log('[CLD defer] bundle loaded OK:', url, 'CLD_SAFE=', !!window.CLD_SAFE);
      document.dispatchEvent(new CustomEvent('cld:bundle:loaded', { detail: { url: url } }));
    };
    s.onerror = function () {
      console.warn('[CLD defer] bundle load failed:', url, '→ trying next…');
      tryLoad(i + 1);
    };
    document.head.appendChild(s);
    console.debug('[CLD defer] trying URL:', url);
  }
  tryLoad(0);
})();

