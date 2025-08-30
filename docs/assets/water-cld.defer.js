function loadBundle(){
  if (window.__CLD_BUNDLE_INJECTED__) { console.debug('[CLD defer] bundle already injected'); return; }
  if ([...document.scripts].some(s => (s.src||'').endsWith('assets/dist/water-cld.bundle.js'))){
    window.__CLD_BUNDLE_INJECTED__ = true; console.debug('[CLD defer] bundle present by src'); return;
  }
  const s = document.createElement('script');
  s.src = '../assets/dist/water-cld.bundle.js';
  s.defer = true;
  s.id = 'cld-bundle-loader';
  s.addEventListener('load', () => { window.__CLD_BUNDLE_INJECTED__ = true; console.debug('[CLD defer] bundle loaded'); });
  document.head.appendChild(s);
  console.debug('[CLD defer] bundle injected');
}
document.addEventListener('DOMContentLoaded', function(){
  if (window.__CLD_BUNDLE_INJECTED__) return;
  window.__CLD_BUNDLE_INJECTED__ = true;
  loadBundle();
}, { once:true });
