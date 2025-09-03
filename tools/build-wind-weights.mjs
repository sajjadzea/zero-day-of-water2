import { readFile, writeFile, copyFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function stripBOM(s = '') {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

function toEnDigits(s = '') {
  return s
    .replace(/[\u06F0-\u06F9]/g, d => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0) - 0x0660))
    .replace(/\u066B/g, '.')
    .replace(/[\u066C\u060C]/g, '')
    .replace(/\s+/g, ' ');
}

function normalizeFa(s = '') {
  return s
    .replace(/\u200c/g, ' ')
    .replace(/[يى]/g, 'ی')
    .replace(/[كﮎﮏﮐﮑ]/g, 'ک')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseNumber(s) {
  if (s == null) return null;
  const t = toEnDigits(String(s)).replace(/[,\s]/g, '');
  if (t === '') return null;
  const n = parseFloat(t);
  return Number.isNaN(n) ? null : n;
}

function parseClasses(text = '', defaultN = 0) {
  const res = { c1: 0, c2: 0, c3: 0 };
  if (!text) return res;
  const clean = normalizeFa(toEnDigits(text.replace(/<br\s*\/?>/gi, '\n')));
  const parts = clean.split(/\n|,|؛/).map(p => p.trim()).filter(Boolean);
  for (const part of parts) {
    let m = part.match(/(\d+)\s*سایت\s*کلاس\s*(\d)/);
    if (m) {
      const cls = Number(m[2]);
      const cnt = Number(m[1]);
      if (cls >= 1 && cls <= 3) res[`c${cls}`] += cnt;
      continue;
    }
    m = part.match(/کلاس\s*(\d)/);
    if (m) {
      const cls = Number(m[1]);
      const cnt = defaultN || 1;
      if (cls >= 1 && cls <= 3) res[`c${cls}`] += cnt;
    }
  }
  return res;
}

function csvParse(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(field);
        field = '';
      } else if (ch === '\n') {
        row.push(field);
        rows.push(row);
        row = [];
        field = '';
      } else if (ch === '\r') {
        // ignore
      } else {
        field += ch;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  const headers = rows.shift() || [];
  return { headers, rows };
}

function indexOfHeader(headers, aliases) {
  const normHeaders = headers.map(h => normalizeFa(h).replace(/\s+/g, '').toLowerCase());
  for (const alias of aliases) {
    const normAlias = normalizeFa(alias).replace(/\s+/g, '').toLowerCase();
    const idx = normHeaders.indexOf(normAlias);
    if (idx !== -1) return idx;
  }
  return -1;
}

async function main() {
  const t8Text = stripBOM(await readFile(path.join(root, 'data', 'table8_counties.csv'), 'utf8'));
  const rawText = stripBOM(await readFile(path.join(root, 'data', 'wind_sites_raw.csv'), 'utf8'));

  const t8 = csvParse(t8Text);
  const raw = csvParse(rawText);

  const aliases = {
    county: ['county', 'شهرستان', 'name_std', 'name_fa'],
    nSites: ['n_sites', 'sites_count', 'تعداد سایت', 'تعدادسایت'],
    areaHa: ['site_area_ha', 'area_ha', 'مساحت سایت (هکتار)', 'مساحت سایت', 'مساحت(هکتار)'],
    capMw: ['capacity_mw', 'ظرفیت تخمینی انرژی بادی (مگاوات)', 'ظرفیت (مگاوات)', 'ظرفیت'],
    classes: ['کلاس بادی', 'classes', 'ترکیب کلاس', 'wind_class']
  };

  const idxCounty = indexOfHeader(t8.headers, aliases.county);
  const idxNSites = indexOfHeader(t8.headers, aliases.nSites);
  const idxAreaHa = indexOfHeader(t8.headers, aliases.areaHa);
  const idxCapMw = indexOfHeader(t8.headers, aliases.capMw);
  const idxClasses = indexOfHeader(t8.headers, aliases.classes);

  if ([idxCounty, idxNSites, idxAreaHa, idxCapMw, idxClasses].some(i => i < 0)) {
    throw new Error('Required columns not found in table8_counties.csv');
  }

  const idxRawCounty = indexOfHeader(raw.headers, aliases.county);
  if (idxRawCounty < 0) throw new Error('county column not found in wind_sites_raw.csv');

  const countByCounty = {};
  for (const r of raw.rows) {
    const c = normalizeFa(r[idxRawCounty] || '');
    if (!c) continue;
    countByCounty[c] = (countByCounty[c] || 0) + 1;
  }

  const rows = [];
  for (const cols of t8.rows) {
    if (!cols || cols.every(c => !c)) continue;
    const county = normalizeFa(cols[idxCounty] || '');
    if (!county) continue;
    const nSitesRaw = parseNumber(cols[idxNSites]);
    let n_sites = nSitesRaw != null ? Math.round(nSitesRaw) : null;
    const site_area_ha = parseNumber(cols[idxAreaHa]);
    const capacity_mw = parseNumber(cols[idxCapMw]);
    const cls = parseClasses(cols[idxClasses] || '', n_sites || 0);
    const sumCls = cls.c1 + cls.c2 + cls.c3;
    if ((n_sites == null || Number.isNaN(n_sites)) && sumCls > 0) n_sites = sumCls;
    if (n_sites == null) n_sites = 0;
    const suitability_avg = n_sites > 0 ? (cls.c1 * 1 + cls.c2 * 0.8 + cls.c3 * 0.6) / n_sites : 0;
    const cap_per_site = capacity_mw != null && n_sites > 0 ? capacity_mw / n_sites : null;
    const mw_per_ha = capacity_mw != null && site_area_ha > 0 ? capacity_mw / site_area_ha : null;
    rows.push({
      county,
      n_sites,
      class1: cls.c1,
      class2: cls.c2,
      class3: cls.c3,
      site_area_ha,
      capacity_mw,
      cap_per_site,
      mw_per_ha,
      suitability_avg
    });
  }

  if (rows.length === 0) throw new Error('No rows parsed from table8_counties.csv');

  let empty = 0;
  for (const row of rows) {
    const rawCount = countByCounty[row.county] || 0;
    if (Math.abs(rawCount - row.n_sites) > 1) {
      console.warn(`WARN ${row.county}: table8=${row.n_sites} raw=${rawCount}`);
    }
    if (row.n_sites === 0 && row.capacity_mw == null) empty++;
  }
  if (empty / rows.length > 0.8) {
    throw new Error('Input columns not detected; check headers/encoding.');
  }

  const capVals = rows.map(r => r.capacity_mw).filter(v => v != null);
  const mwhaVals = rows.map(r => r.mw_per_ha).filter(v => v != null);
  const capMin = Math.min(...capVals);
  const capMax = Math.max(...capVals);
  const mwhaMin = Math.min(...mwhaVals);
  const mwhaMax = Math.max(...mwhaVals);
  const capRange = capMax - capMin;
  const mwhaRange = mwhaMax - mwhaMin;

  for (const r of rows) {
    r.cap_norm = r.capacity_mw != null && capRange > 0 ? (r.capacity_mw - capMin) / capRange : 0;
    r.mwha_norm = r.mw_per_ha != null && mwhaRange > 0 ? (r.mw_per_ha - mwhaMin) / mwhaRange : 0;
    r.w_avg = 0.6 * r.cap_norm + 0.3 * r.suitability_avg + 0.1 * r.mwha_norm;
    r.sum_w = r.w_avg * r.n_sites;
  }

  if (rows.some(r => r.capacity_mw != null) && rows.every(r => r.w_avg === 0)) {
    throw new Error('Normalization failed. Check decimal normalization.');
  }

  const outDir = path.join(root, 'docs', 'data', 'amaayesh');
  await mkdir(outDir, { recursive: true });

  const fmt = v => (v == null ? '' : String(Math.round(v * 1e4) / 1e4));
  const fmt4 = v => (v == null ? '' : (Math.round(v * 1e4) / 1e4).toFixed(4));

  const header = 'county,n_sites,class1,class2,class3,site_area_ha,capacity_mw,cap_per_site,mw_per_ha,suitability_avg,cap_norm,mwha_norm,w_avg,sum_w';
  const lines = [header];
  for (const r of rows) {
    lines.push([
      r.county,
      r.n_sites,
      r.class1,
      r.class2,
      r.class3,
      fmt(r.site_area_ha),
      fmt(r.capacity_mw),
      fmt4(r.cap_per_site),
      fmt4(r.mw_per_ha),
      fmt4(r.suitability_avg),
      fmt4(r.cap_norm),
      fmt4(r.mwha_norm),
      fmt4(r.w_avg),
      fmt4(r.sum_w)
    ].join(','));
  }
  lines.push('');
  await writeFile(path.join(outDir, 'wind_weights_by_county.csv'), lines.join('\n'), 'utf8');
  await copyFile(path.join(root, 'data', 'wind_sites_raw.csv'), path.join(outDir, 'wind_sites_raw.csv'));

  console.log(`wind_weights_by_county.csv: ${rows.length} rows \u2713  (copied wind_sites_raw.csv)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

