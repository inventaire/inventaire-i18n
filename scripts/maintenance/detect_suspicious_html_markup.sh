#!/usr/bin/env bash

# The primary purpose of this script is to detect script injections attempts
# but it also detects some pseudo-markdown errors, such as when `**` was translated as `*`,
# generating a `<i>` instead of a `<strong>`

grep --extended-regexp --color=always --only-matching --line-number  '<i>' dist/*/*.json

if [ "$?" == "0" ]; then
  # shellcheck disable=SC2016
  echo -e '\e[0;33m⮝ ⮝ ⮝ Markdown error: a `**` was translated as `*`, generating a <i> instead of a <strong> ⮝ ⮝ ⮝ \e[0m'
fi

grep --extended-regexp --color=always --only-matching --line-number  '<\s*\/?\s*\w+\s*>' src/*/*.json dist/*/*.json | \
grep --extended-regexp --color=always --invert-match '</?(br|span|strong|a|i)>'

if [ "$?" == "0" ]; then
  echo -e '\e[5;41m⮝ ⮝ ⮝ 🚨 Found suspicious HTML markup ⮝ ⮝ ⮝ \e[0m'
  exit 1
fi
