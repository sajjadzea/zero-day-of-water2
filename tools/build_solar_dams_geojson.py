#!/usr/bin/env python3
import csv, json, os, re
from collections import defaultdict

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
IN_SOLAR_CSV = os.path.join(ROOT, "docs", "data", "amaayesh", "solar_sites.csv")
IN_DAMS_CSV  = os.path.join(ROOT, "docs", "data", "amaayesh", "dams.csv")
OUT_SOLAR_GEO= os.path.join(ROOT, "docs", "data", "amaayesh", "solar_sites.geojson")
OUT_DAMS_GEO = os.path.join(ROOT, "docs", "data", "amaayesh", "dams.geojson")

COUNTY_ALIASES = {
  'مهولات': 'مه ولات',
  'مه‌ولات': 'مه ولات',
  'تربتجام': 'تربت جام',
  'تربت‌جام': 'تربت جام',
  'طرقبه شاندیز': 'طرقبه و شاندیز',
  'طرقبه‌ شاندیز': 'طرقبه و شاندیز',
  'فیض آباد': 'مه ولات',
  'طرقبه': 'طرقبه و شاندیز',
  'شاندیز': 'طرقبه و شاندیز',
  'تربتحیدریه': 'تربت حیدریه',
  'تربت‌حیدریه': 'تربت حیدریه',
  'تربت حیدریه': 'تربت حیدریه',
  'تربت-حیدریه': 'تربت حیدریه',
  'تربت حيدريه': 'تربت حیدریه',
  'تربت‌حيدريه': 'تربت حیدریه',
  'تربت حیدریه‌': 'تربت حیدریه',
  'زیرنجفام': 'زبرخان',
  'بينالود': 'بینالود'
}

def normalize_text(s):
    return re.sub(r'\s+', ' ', str(s).replace('\u200c','').replace('\u200f','').replace('ي','ی').replace('ى','ی').replace('ك','ک')).strip()

def canonical_county_name(s):
    if s is None or str(s).strip()=='':
        return None
    t = normalize_text(s)
    t = re.sub(r'[ـ]+','', t)
    t = re.sub(r'[-–—]+',' ', t)
    t = re.sub(r'\s+',' ', t).strip()
    if t == 'تربتحیدریه':
        t = 'تربت حیدریه'
    if re.match(r'^مه.?ولات$', t):
        t = 'مه ولات'
    return COUNTY_ALIASES.get(t, t)

# --- Solar sites ---
solar_records = []
with open(IN_SOLAR_CSV, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = normalize_text(row['name_fa'])
        county = canonical_county_name(row['county'])
        lat = round(float(row['lat']),5)
        lon = round(float(row['lon']),5)
        capacity = float(row['capacity_mw'])
        confidence = float(row['confidence'])
        solar_records.append({
            'name_fa': name,
            'county': county,
            'lat': lat,
            'lon': lon,
            'capacity_mw': capacity,
            'confidence': confidence
        })

# assign phases for co-located points
coords = defaultdict(list)
for idx, r in enumerate(solar_records):
    coords[(r['lat'], r['lon'])].append(idx)
for group in coords.values():
    if len(group) > 1:
        for phase, idx in enumerate(group, start=1):
            solar_records[idx]['phase'] = phase

features_solar = []
for r in solar_records:
    props = {
        'name_fa': r['name_fa'],
        'county': r['county'],
        'capacity_mw': r['capacity_mw'],
        'confidence': r['confidence']
    }
    if 'phase' in r:
        props['phase'] = r['phase']
    features_solar.append({
        'type':'Feature',
        'geometry':{'type':'Point','coordinates':[r['lon'], r['lat']]},
        'properties': props
    })

with open(OUT_SOLAR_GEO, 'w', encoding='utf-8') as f:
    json.dump({'type':'FeatureCollection','features':features_solar}, f, ensure_ascii=False, separators=(',',':'))

# --- Dams ---
dams_records = []
with open(IN_DAMS_CSV, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = normalize_text(row['نام سد'])
        county = canonical_county_name(row['شهرستان'])
        lon = round(float(row['طول (Longitude)']),6)
        lat = round(float(row['عرض (Latitude)']),6)
        approx = normalize_text(row['تقریبی؟']) == 'بله'
        dams_records.append({
            'name_fa': name,
            'county': county,
            'lon': lon,
            'lat': lat,
            'approx': approx
        })

features_dams = []
for r in dams_records:
    props = {
        'name_fa': r['name_fa'],
        'county': r['county'],
        'approx': r['approx'],
        'lon': r['lon'],
        'lat': r['lat']
    }
    features_dams.append({
        'type':'Feature',
        'geometry':{'type':'Point','coordinates':[r['lon'], r['lat']]},
        'properties': props
    })

with open(OUT_DAMS_GEO, 'w', encoding='utf-8') as f:
    json.dump({'type':'FeatureCollection','features':features_dams}, f, ensure_ascii=False, separators=(',',':'))

print('[ok] wrote', OUT_SOLAR_GEO, 'and', OUT_DAMS_GEO)
