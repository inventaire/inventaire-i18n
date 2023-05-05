#!/usr/bin/env bash

# Usage:
#        npm run remove-matching-keys <key-pattern>
#
# Example:
#        npm run remove-matching-keys pitch_

set -eu

key="$1"

sed --in-place "/$key/d" ./src/client/*json ./src/server/*json

git diff --stat src
