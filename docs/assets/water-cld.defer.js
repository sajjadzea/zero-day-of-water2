(function () {
  // اگر اسکریپت باندل واقعاً در DOM هست، دوباره تزریق نکن
  var existing = document.querySelector('script[data-cld-bundle]');
  if (existing) {
    console.log('[CLD defer] bundle tag already in DOM:', existing.src);
    return;
  }

  // حتی اگر CLD_SAFE روی window هست ولی تگ نیست، باز تزریق کن
  if (window.CLD_SAFE && !existing) {
    console.warn('[CLD defer] CLD_SAFE present but bundle tag missing; injecting anyway');
  }

  // کاندیدهای URL (نسبی) + شکستِ کش
  var defaultCandidates = [
    ['..', 'assets', 'dist', 'water-cld.bundle.js?v=3'].join('/'),
    ['.', 'assets', 'dist', 'water-cld.bundle.js?v=3'].join('/')
  ];
  var candidates = (Array.isArray(window.CLD_BUNDLE_URLS) && window.CLD_BUNDLE_URLS.length)
    ? window.CLD_BUNDLE_URLS
    : defaultCandidates;

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
