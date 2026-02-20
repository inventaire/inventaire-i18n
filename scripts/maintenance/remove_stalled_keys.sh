#!/usr/bin/env bash

set -eu

json-apply --in-place ./scripts/maintenance/remove_stalled_keys.js#removeServerStaledKeys src/server/*json
json-apply --in-place ./scripts/maintenance/remove_stalled_keys.js#removeClientStaledKeys src/client/*json
