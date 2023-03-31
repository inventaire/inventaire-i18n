#!/usr/bin/env bash
set -eu

mkdir -p ./dist/server ./dist/client

active_languages=$(./scripts/print_active_languages.js)

for lang in $active_languages;
do
  echo "building components: $lang"
  ./scripts/build/build_lang_dist_file.js "$lang" server > "./dist/server/${lang}.json" &
  ./scripts/build/build_lang_dist_file.js "$lang" client > "./dist/client/${lang}.json" &
done
