#!/usr/bin/env bash
set -eu

rm -rf ./dist

echo 'build commponents'
./scripts/build/build_components.sh

echo 'update language stats'
./scripts/stats/update_language_stats.js

./scripts/maintenance/detect_suspicious_html_markup.sh
