#!/usr/bin/env bash
set -euo pipefail

HTML="docs/test/water-cld.html"

red()  { printf "\033[31m%s\033[0m\n" "$*"; }
grn()  { printf "\033[32m%s\033[0m\n" "$*"; }
ylw()  { printf "\033[33m%s\033[0m\n" "$*"; }

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

# --- لیست Vendorها (باید قبل از باندل باشند و دقیقاً یکبار بیایند)
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

# --- لیست Coreها (باید قبل از باندل باشند و دقیقاً یکبار بیایند)
CORES=(
  '/assets/water-cld.kernel.js'
  '/assets/water-cld.kernel-adapter.js'
  '/assets/graph-store.js'
  '/assets/model-bridge.js'
)

BUNDLE='/assets/dist/water-cld.bundle.js'
GUARD='/assets/chart.guard.js'

# --- وجود و یکتایی الگوها
for p in "${VENDORS[@]}" "${CORES[@]}" "$BUNDLE" "$GUARD"; do
  need "$p"
  c=$(count_of "$p")
  if [[ "$c" != "1" ]]; then
    red "❌ Duplicate or missing occurrences for $p : count=$c (expected: 1)"
    exit 1
  fi
done

# --- ترتیب: Vendorها و Coreها باید قبل از باندل باشند
BLINE=$(line_of "$BUNDLE")
for p in "${VENDORS[@]}"; do
  vline=$(line_of "$p")
  if [[ -z "$vline" || -z "$BLINE" || "$vline" -ge "$BLINE" ]]; then
    red "❌ Order error: $p should be BEFORE $BUNDLE (got $vline vs $BLINE)"
    exit 1
  fi
done
for p in "${CORES[@]}"; do
  cline=$(line_of "$p")
  if [[ -z "$cline" || -z "$BLINE" || "$cline" -ge "$BLINE" ]]; then
    red "❌ Order error: $p should be BEFORE $BUNDLE (got $cline vs $BLINE)"
    exit 1
  fi
done

# --- Guards باید بعد از باندل بیاید
GLINE=$(line_of "$GUARD")
if [[ -z "$GLINE" || -z "$BLINE" || "$GLINE" -le "$BLINE" ]]; then
  red "❌ Order error: $GUARD should be AFTER $BUNDLE (got $GLINE vs $BLINE)"
  exit 1
fi

# --- مسیر قدیمی Chart.js نباید در مخزن باشد
if git grep -n "assets/libs/chart.umd.min.js" -- ':!node_modules' >/dev/null 2>&1; then
  red "❌ Found legacy Chart path: assets/libs/chart.umd.min.js (replace with /assets/vendor/chart.umd.min.js)"
  git grep -n "assets/libs/chart.umd.min.js" -- ':!node_modules' || true
  exit 1
fi

# --- هشدار نرم: شیم کرنل (inline) اگر باشد عالی است
if ! grep -q 'window\.kernel' "$HTML"; then
  ylw "⚠️  kernel shim inline not found; core kernel files are present which may be sufficient."
fi

grn "✅ CLD HTML checks passed: unique tags, correct order, no legacy Chart path."
