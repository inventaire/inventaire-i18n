#!/usr/bin/env bash

./scripts/reorder/reorder_all_resources.sh

# Fix markdown links
sed --in-place 's/(]\s+()/](/' src/server/*json src/client/*json