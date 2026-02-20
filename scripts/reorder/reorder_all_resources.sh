#!/usr/bin/env bash

set -eu

# Reorder resouces keys as they would be reordered by the Weblate "Customize JSON output" addon
# to reduce diffs when adding new keys for instance

json-apply --in-place ./scripts/reorder/sort_resource_keys_by_character_code.js src/server/*json
json-apply --in-place ./scripts/reorder/sort_resource_keys_by_character_code.js src/client/*json

# Align formatting of empty files with Weblate
sed --in-place 's/^{}$/{\n}/' src/server/*json src/client/*json

cat ./src/client/keys_translated_from_wikidata | sed 's/^P//' | sort --numeric-sort | sed 's/^/P/' > ./src/client/keys_translated_from_wikidata.tmp
mv ./src/client/keys_translated_from_wikidata.tmp ./src/client/keys_translated_from_wikidata
