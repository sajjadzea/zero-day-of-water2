(function(){
  // --- Safe boot guard ---
  if (!document.getElementById('map') && !document.getElementById('ama-map')) {
    console.error('[AMA] map container missing'); throw new Error('no-map');
  }
  if (window.__AMA_BOOTED__) { console.warn('[AMA] already booted'); }
  window.__AMA_BOOTED__ = true;

  window.AMA = window.AMA || {};
  window.AMA.CHECK = () => ({
    booted: !!window.__AMA_BOOTED__,
    hasMap: !!document.getElementById('map')
  });

  const MAP_ID = 'map';
  window.AMA_DEBUG = false;

    function dbg(){ if (window.AMA_DEBUG) console.log('[AMA]', ...arguments); }
    function warn(){ console.warn('[AMA]', ...arguments); }

    // --- URL resolver: مسیرها را نسبت به همین صفحه مطلق می‌کند ---
    function toAbs(u) {
      try { return new URL(u, window.location.href).toString(); }
      catch { return u; }
    }

    // --- JSON fetch with HTML-guard ---
    async function fetchJsonSafe(url) {
      const abs = toAbs(url);
      try {
        const res = await fetch(abs, { cache: 'no-cache' });
        if (!res.ok) { console.warn('[AMA] fetch failed', abs, res.status); return null; }
        const ct = (res.headers.get('content-type') || '').toLowerCase();
        const txt = await res.text();
        if (ct.includes('html') || txt.trim().startsWith('<!DOCTYPE')) {
          console.warn('[AMA] HTML instead of JSON', abs);
          return null;
        }
        return JSON.parse(txt);
      } catch (e) {
        console.warn('[AMA] network error', abs, e);
        return null;
      }
    }

    // Global handles for debug
    // (groups assigned later after manifest)

  function popupHTML(props){
    const n = props.name_fa || props.name || '—';
    const c = props.county || props.shahrestan || '';
    const cap = props.capacity_mw ?? props.capacity ?? props.mw ?? null;
    const conf = props.confidence ?? props.conf ?? null;
    let lines = [`<div style="font:600 13px system-ui">${n}</div>`];
    if (c) lines.push(`<div style="opacity:.8">شهرستان: ${c}</div>`);
    if (cap!=null) lines.push(`<div>ظرفیت (MW): ${cap}</div>`);
    if (conf!=null) lines.push(`<div>اطمینان: ${conf}</div>`);
    return lines.join('');
  }

  function buildLegendDock(){
    const dock = document.querySelector('#ama-layer-dock');
    if (!dock) return;
    let host = dock.querySelector('.legend-host');
    if (!host) {
      host = document.createElement('div');
      host.className = 'legend-host';
      host.style.cssText = 'margin-top:10px;border-top:1px solid rgba(0,0,0,.08);padding-top:8px';
      dock.appendChild(host);
    }
    host.innerHTML = `
      <div style="font:600 13px system-ui; margin-bottom:6px">راهنمای رنگ‌ها</div>
      <div style="display:flex;gap:6px;align-items:center">
        <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:#2563eb"></span><span>باد</span>
        <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:#f59e0b;margin-inline-start:10px"></span><span>خورشیدی</span>
        <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:#0ea5e9;margin-inline-start:10px"></span><span>سد</span>
      </div>`;
  }

  function fillTop10(rows){
    const tbody = document.querySelector('#ama-top10');
    if (!tbody) return;
    tbody.innerHTML = rows.map((r,i)=>`
      <tr>
        <td style="padding:6px">${i+1}</td>
        <td style="padding:6px">${r.name}</td>
        <td style="padding:6px">${r.mw?.toLocaleString?.('fa-IR') ?? '—'}</td>
      </tr>`).join('');
  }

    async function ama_bootstrap(){
      // 1) Base map
      const map = L.map(MAP_ID, { zoomControl:true }).setView([35.6, 59.0], 7);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: '&copy; OpenStreetMap' }).addTo(map);

      // --- manifest ---
      const manifest = await fetchJsonSafe('./layers.config.json');
      if (!manifest?.files) { console.warn('[AMA] manifest missing'); throw new Error('no-manifest'); }
      const files = Object.fromEntries(Object.entries(manifest.files).map(([k, v]) => [k, toAbs(v)]));
      const { counties, province, wind_sites, solar_sites, dams } = files;

      // --- draw boundaries (پایدار؛ اگر نبود فقط warn) ---
      const gjCounties = await fetchJsonSafe(counties);
      if (gjCounties?.type === 'FeatureCollection') {
        L.geoJSON(gjCounties, { style: { color: '#111', weight: 2, fillOpacity: 0 } }).addTo(map);
      } else { console.warn('[AMA] missing counties'); }

      const gjProvince = await fetchJsonSafe(province);
      if (gjProvince?.type === 'FeatureCollection') {
        L.geoJSON(gjProvince, { style: { color: '#6b7280', weight: 3, dashArray: '4 4', fillOpacity: 0 } }).addTo(map);
      }

      // --- points (گروه‌ها) ---
      const G = { wind: L.layerGroup(), solar: L.layerGroup(), dams: L.layerGroup() };
      async function addPoints(url, group, color, radius = 6) {
        if (!url) return 'missing';
        const gj = await fetchJsonSafe(url);
        if (!gj || gj.type !== 'FeatureCollection') return 'missing';
        L.geoJSON(gj, { pointToLayer: (f, ll) => L.circleMarker(ll, { radius, color, fillOpacity: .6 }) }).addTo(group);
        return 'ok';
      }
      await addPoints(wind_sites,  G.wind,  '#2563eb');
      await addPoints(solar_sites, G.solar, '#f59e0b', 5);
      await addPoints(dams,       G.dams,  '#0ea5e9', 5);

      function bindToggle(sel, group) {
        const el = document.querySelector(sel);
        if (!el) return;
        el.addEventListener('change', () => el.checked ? group.addTo(map) : map.removeLayer(group), { passive: true });
      }
      bindToggle('#chk-wind-sites',  G.wind);
      bindToggle('#chk-solar-sites', G.solar);
      bindToggle('#chk-dam-sites',   G.dams);

      window.AMA = Object.assign(window.AMA || {}, { G, files });

      dbg('bootstrap done');
    }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', ama_bootstrap, { once:true });
  else
    ama_bootstrap();
})();
