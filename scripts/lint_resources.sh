#!/usr/bin/env bash

./scripts/maintenance/detect_suspicious_html_markup.sh
./scripts/reorder/reorder_all_resources.sh

# Fix markdown links
sed --in-place 's/(]\s+()/](/' src/server/*json src/client/*json

# Lint French
json-apply --in-place ./scripts/lint/french.js src/server/fr.json src/client/fr.json src/wikidata/fr.json
