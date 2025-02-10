#!/usr/bin/env bash

# Differences in key case can introduce duplicated keys

# Usage:
#        npm run find-duplicated-keys
#

set -o pipefail

check_duplicated_keys() {
  echo "checking $1:"
  cat "$1" | jq 'keys[]' -cr | sort | uniq --count --ignore-case | grep -vE '^\s+1 ' && false || true
}

check_duplicated_keys src/client/en.json
check_duplicated_keys src/server/en.json
