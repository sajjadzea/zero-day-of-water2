// --- Build id (keep at top)
window.__AMA_BUILD_ID = document.querySelector('meta[name="build-id"]')?.content || String(Date.now());

;(async function () {
  // Global namespace
  const AMA = (window.AMA = window.AMA || {});
  AMA.VERSION = AMA.VERSION || 'v1';

  // create map if not present and export for debug
  const mapEl = document.getElementById('map');
  if (!mapEl) { console.error('[AMA] #map missing'); return; }
  if (!window.__AMA_MAP) {
    // اگر قبلاً ساخته شده، استفاده کن (leaflet init در همین فایل یا فایل دیگر)
    window.__AMA_MAP = AMA.map || window.__AMA_MAP;
  }
  const map = (window.__AMA_MAP = window.__AMA_MAP || L.map('map', { zoomControl: true }));

  // --- Registry: layer groups
  const G = AMA.G || {
    wind: L.layerGroup(),
    solar: L.layerGroup(),
    dams: L.layerGroup(),
    counties: L.geoJSON(null, {
      style: () => ({ color: '#111', weight: 2, opacity: 1, fillOpacity: 0 })
    }),
    province: L.geoJSON(null, {
      style: () => ({ color: '#6b7280', weight: 2, opacity: 0.8, fillOpacity: 0 })
    })
  };
  AMA.groups = window.AMA.G = G;

  // اطمینان از حضور گروه‌های پایه روی نقشه
  // (لایه‌های نقطه‌ای را فقط هنگام روشن شدن نشان می‌دهیم؛ مرزها را پیش‌فرض اضافه می‌کنیم)
  if (!map.hasLayer(G.counties)) G.counties.addTo(map);
  if (!map.hasLayer(G.province)) G.province.addTo(map);

  // --- Safe fetch
  async function fetchJsonSafe(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      const ct = (res.headers.get('content-type') || '').toLowerCase();
      const text = await res.text();
      if (!res.ok || ct.includes('html') || text.trim().startsWith('<!DOCTYPE')) return null;
      return JSON.parse(text);
    } catch { return null; }
  }

  // --- Load config + data
  const CFG_URL = '/data/layers.config.json';
  const cfg = await fetchJsonSafe(CFG_URL);
  if (cfg?.baseData) {
    const b = cfg.baseData;
    // helper: add geojson to a target group with optional pointToLayer
    function addGeoJSONToGroup(key, gj, point = false) {
      if (!gj) return;
      const opts = point
        ? { pointToLayer: (_, latlng) => L.circleMarker(latlng, { radius: 5, weight: 1 }) }
        : undefined;
      const layer = L.geoJSON(gj, opts);
      G[key].addLayer(layer);
    }

    // borders
    addGeoJSONToGroup('counties', await fetchJsonSafe(`/data/${b.counties}`));
    addGeoJSONToGroup('province', await fetchJsonSafe(`/data/${b.combined}`));

    // points
    addGeoJSONToGroup('wind', await fetchJsonSafe(`/data/${b.wind_sites}`), true);
    addGeoJSONToGroup('solar', await fetchJsonSafe(`/data/${b.solar_sites}`), true);
    addGeoJSONToGroup('dams', await fetchJsonSafe(`/data/${b.dams}`), true);
  }

  // expose minimal API for other scripts
  AMA.ready = true;
  window.__AMA_MAP = map;
})();
