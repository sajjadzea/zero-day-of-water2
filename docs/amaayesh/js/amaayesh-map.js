(function(){
  if (!document.getElementById('map')) { console.error('[AMA] #map missing'); throw new Error('no-map'); }
  if (window.__AMA_BOOTED__) { console.warn('[AMA] already booted'); return; }
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

  async function fetchJsonSafe(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) { warn('fetch failed', url, res.status); return null; }
      const ct = (res.headers.get('content-type') || '').toLowerCase();
      const text = await res.text();
      // Reject obvious HTML rewrites (e.g., 404 -> index.html)
      if (ct.includes('html') || text.trim().startsWith('<!DOCTYPE')) {
        warn('HTML instead of JSON', url);
        return null;
      }
      try { return JSON.parse(text); }
      catch(e){ warn('invalid JSON', url); return null; }
    } catch (e) {
      warn('network error', url, e);
      return null;
    }
  }

  // Global handles for debug
  const AMA = (window.AMA = window.AMA || {});
  AMA.layers = { wind:null, solar:null, dams:null };
  const G = { wind:L.layerGroup(), solar:L.layerGroup(), dams:L.layerGroup() };
  AMA.groups = G;
  window.AMA.G = G;

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

    // 2) Manifest
    const manifest = await fetchJsonSafe('amaayesh/layers.config.json')
                   || await fetchJsonSafe('./layers.config.json');
    if (!manifest || !manifest.files) {
      warn('manifest missing → only base map will render');
      return;
    }

    // 3) Boundaries
    const counties = manifest.files.counties ? await fetchJsonSafe(manifest.files.counties) : null;
    if (counties && counties.type === 'FeatureCollection') {
      L.geoJSON(counties, {
        style:{ color:'#111', weight:2, opacity:1, fillOpacity:0 }
      }).addTo(map);
      AMA.counties = counties;
    } else if (manifest.files.counties) warn('missing counties');

    const province = manifest.files.province ? await fetchJsonSafe(manifest.files.province) : null;
    if (province && province.type === 'FeatureCollection') {
      L.geoJSON(province, {
        style:{ color:'#6b7280', weight:3, dashArray:'4 4', fillOpacity:0 }
      }).addTo(map);
      AMA.province = province;
    }

    // 4) Overlays (point layers) + LayerGroups
    async function buildPoints(url, group, makeStyle){
      const gj = url ? await fetchJsonSafe(url) : null;
      if (!gj || gj.type !== 'FeatureCollection') return 'missing';
      L.geoJSON(gj, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, makeStyle(f))
      }).addTo(group);
      return 'ok';
    }

    const windState  = await buildPoints(manifest.files.wind_sites,  G.wind,  () => ({ radius:6, color:'#2563eb', fillOpacity:.6 }));
    const solarState = await buildPoints(manifest.files.solar_sites, G.solar, () => ({ radius:5, color:'#f59e0b', fillOpacity:.6 }));
    const damsState  = await buildPoints(manifest.files.dams,       G.dams,  () => ({ radius:5, color:'#0ea5e9', fillOpacity:.6 }));

    dbg('OVERLAYS', { wind:windState, solar:solarState, dams:damsState });

    // make points clickable (bindPopup)
    function bindPopups(group){
      group.eachLayer(l => {
        if (l.feature && l.feature.properties)
          l.bindPopup(popupHTML(l.feature.properties));
      });
    }
    bindPopups(G.wind);
    bindPopups(G.solar);
    bindPopups(G.dams);

    // Legend + Top-10
    buildLegendDock();

    // crude Top-10 based on capacity_mw if exists (wind or solar)
    let top = [];
    function collectTop(g){
      g.eachLayer(l => {
        const p = l.feature?.properties || {};
        const mw = p.capacity_mw ?? p.capacity ?? p.mw ?? null;
        const name = p.name_fa || p.name || '—';
        if (mw!=null) top.push({ name, mw:Number(mw) });
      });
    }
    collectTop(G.wind);
    collectTop(G.solar);
    top.sort((a,b)=> (b.mw||0)-(a.mw||0));
    fillTop10(top.slice(0,10));

    // 5) Wire checkboxes
    function bindToggle(id, group){
      const el = document.querySelector(id);
      if (!el) return;
      el.addEventListener('change', () => {
        if (el.checked) group.addTo(map); else map.removeLayer(group);
      }, { passive:true });
    }
    bindToggle('#chk-wind-sites',  G.wind);
    bindToggle('#chk-solar-sites', G.solar);
    bindToggle('#chk-dam-sites',   G.dams);

    // Start with all off (UI decides)
    // (بگذارید کاربر خودش تیک بزند؛ تغییر اولیه نمی‌دهیم)

    dbg('bootstrap done');
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', ama_bootstrap, { once:true });
  else
    ama_bootstrap();
})();
