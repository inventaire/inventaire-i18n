#!/usr/bin/env bash
set -eu

log_green(){ echo -e "\e[0;32m${@}\e[0;30m" ; }
log_blue(){ echo -e "\e[0;34m${@}\e[0;30m" ; }

log_blue "pull weblate commits"
./scripts/pull_weblate_commits.sh

log_blue "fetch wikidata translations"
./scripts/fetch/fetch_wikidata_translations.sh

log_green "done fetching"

# Always linting after fetching translation, to apply language-specific lints
./scripts/lint_resources.sh
