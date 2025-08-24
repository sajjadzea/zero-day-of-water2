#!/usr/bin/env bash
set -euo pipefail

# فایل HTML هدف
HTML="docs/test/water-cld.html"

# --- رنگ‌ها
red()  { printf "\033[31m%s\033[0m\n" "$*"; }
grn()  { printf "\033[32m%s\033[0m\n" "$*"; }
ylw()  { printf "\033[33m%s\033[0m\n" "$*"; }

# --- کمک‌تابع‌ها
need() {
  local pat="$1"
  if ! grep -q "$pat" "$HTML"; then
    red "❌ Required pattern not found in $HTML: $pat"
    exit 1
  fi
}

count_of() {
  local pat="$1"
  grep -o "$pat" "$HTML" | wc -l | tr -d '[:space:]'
}

line_of() {
  local pat="$1"
  nl -ba "$HTML" | grep "$pat" | awk '{print $1}' | head -1
}

# --- مسیرها (مطابق معماری جدید)
VENDORS=(
  '/assets/vendor/cytoscape.min.js'
  '/assets/vendor/elk.bundled.js'
  '/assets/vendor/cytoscape-elk.js'
  '/assets/vendor/dagre.min.js'
  '/assets/vendor/cytoscape-dagre.js'
  '/assets/vendor/chart.umd.min.js'
  '/assets/vendor/expr-eval.min.js'
  '/assets/vendor/popper.min.js'
  '/assets/vendor/tippy.umd.min.js'
)

CORES=(
  '/assets/water-cld.kernel.js'
  '/assets/water-cld.kernel-adapter.js'
  '/assets/graph-store.js'
  '/assets/model-bridge.js'
)

# باندل نهایی که به‌صورت داینامیک تزریق می‌شود
BUNDLE='/assets/dist/water-cld.bundle.js'
# لودر دیفر که باندل را تزریق می‌کند
DEFER='/assets/water-cld.defer.js'
# سنیتینل/گارد واقعی
GUARD='/assets/debug/sentinel.js'

# --- بررسی مسیر باندل (مستقیم در HTML یا غیرمستقیم از طریق defer)
need_bundle_via_html_or_defer() {
  # حالت 1: باندل مستقیم در HTML
  if grep -q "$BUNDLE" "$HTML"; then
    # یکتایی باندل در HTML
    local c
    c=$(count_of "$BUNDLE")
    if [[ "$c" != "1" ]]; then
      red "❌ Duplicate or missing occurrences for $BUNDLE : count=$c (expected: 1)"
      exit 1
    fi
    return 0
  fi

  # حالت 2: باندل در HTML نیست؛ باید defer در HTML باشد و داخل فایل defer، مسیر باندل ذکر شده باشد
  if ! grep -q "$DEFER" "$HTML"; then
    red "❌ Neither $BUNDLE nor $DEFER found in $HTML (one of them must be present)"
    exit 1
  fi

  # یکتایی defer در HTML
  local dcount
  dcount=$(count_of "$DEFER")
  if [[ "$dcount" != "1" ]]; then
    red "❌ Duplicate or missing occurrences for $DEFER : count=$dcount (expected: 1)"
    exit 1
  fi

  # وجود الگوی باندل داخل فایل defer
  local defer_file="docs${DEFER}"
  if [[ ! -f "$defer_file" ]]; then
    red "❌ Defer file not found on disk: $defer_file"
    exit 1
  fi
  if ! grep -q "$BUNDLE" "$defer_file"; then
    red "❌ $DEFER does not inject $BUNDLE (pattern not found in $defer_file)"
    exit 1
  fi
}

# --- وجود و یکتایی Vendor/Core
for p in "${VENDORS[@]}" "${CORES[@]}"; do
  need "$p"
  c=$(count_of "$p")
  if [[ "$c" != "1" ]]; then
    red "❌ Duplicate or missing occurrences for $p : count=$c (expected: 1)"
    exit 1
  fi
done

# --- بررسی باندل/دیفر
need_bundle_via_html_or_defer

# --- محاسبه خط مرجع برای ترتیب
# اگر باندل مستقیم در HTML بود، خط همان باندل؛ در غیر این‌صورت خط defer
if grep -q "$BUNDLE" "$HTML"; then
  BLINE=$(line_of "$BUNDLE")
else
  BLINE=$(line_of "$DEFER")
fi

# --- ترتیب: Vendor/Core باید قبل از باندل/دیفر باشند
for p in "${VENDORS[@]}"; do
  vline=$(line_of "$p")
  if [[ -z "$vline" || -z "$BLINE" || "$vline" -ge "$BLINE" ]]; then
    red "❌ Order error: $p should be BEFORE bundle/defer (got $vline vs $BLINE)"
    exit 1
  fi
done
for p in "${CORES[@]}"; do
  cline=$(line_of "$p")
  if [[ -z "$cline" || -z "$BLINE" || "$cline" -ge "$BLINE" ]]; then
    red "❌ Order error: $p should be BEFORE bundle/defer (got $cline vs $BLINE)"
    exit 1
  fi
done

# --- گارد/سنیتینل باید بعد از باندل/دیفر بیاید
need "$GUARD"
gcount=$(count_of "$GUARD")
if [[ "$gcount" != "1" ]]; then
  red "❌ Duplicate or missing occurrences for $GUARD : count=$gcount (expected: 1)"
  exit 1
fi
GLINE=$(line_of "$GUARD")
if [[ -z "$GLINE" || -z "$BLINE" || "$GLINE" -le "$BLINE" ]]; then
  red "❌ Order error: $GUARD should be AFTER bundle/defer (got $GLINE vs $BLINE)"
  exit 1
fi

# --- مسیر قدیمی Chart.js نباید در مخزن باشد
if git grep -n "assets/libs/chart.umd.min.js" -- ':!node_modules' >/dev/null 2>&1; then
  red "❌ Found legacy Chart path: assets/libs/chart.umd.min.js (replace with /assets/vendor/chart.umd.min.js)"
  git grep -n "assets/libs/chart.umd.min.js" -- ':!node_modules' || true
  exit 1
fi

# --- هشدار نرم: اشاره‌ای به shim کرنل در HTML (غیرالزامی)
if ! grep -q 'window\.kernel' "$HTML"; then
  ylw "⚠️  kernel shim inline not found; core kernel files are present which may be sufficient."
fi

grn "✅ CLD HTML checks passed: unique tags, correct order, bundle via HTML or defer OK, no legacy Chart path."
