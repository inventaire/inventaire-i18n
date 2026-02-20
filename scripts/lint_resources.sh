#!/usr/bin/env bash

set -eu

echo Detect suspicious html markup
./scripts/maintenance/detect_suspicious_html_markup.sh
echo Remove stalled keys
./scripts/maintenance/remove_stalled_keys.sh
echo Reorder all resources
./scripts/reorder/reorder_all_resources.sh

echo Fix markdown links
sed --in-place 's/(]\s+()/](/' src/server/*json src/client/*json

echo Lint French
json-apply --in-place ./scripts/lint/french.js src/server/fr.json src/client/fr.json src/wikidata/fr.json

echo Align formatting of empty files with Weblate
sed --in-place 's/^{}$/{\n}/' src/server/*json src/client/*json

echo Done
