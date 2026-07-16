#!/usr/bin/env bash

# Detect script injections attempts
# (though sanitize-html should get rid of them during the build process)

grep --extended-regexp --color=always --only-matching --line-number  '<\s*\/?\s*\w+\s*>' src/*/*.json dist/*/*.json | \
grep --extended-regexp --color=always --invert-match '</?(br|span|strong|a|em)>'

if [ "$?" == "0" ]; then
  echo -e '\e[5;41m⮝ ⮝ ⮝ 🚨 Found suspicious HTML markup ⮝ ⮝ ⮝ \e[0m'
  exit 1
fi

# Detect escaped HTML entities
grep --extended-regexp --color=always --only-matching --line-number  '&[A-Za-z0-9]+;' dist/*/*.json

if [ "$?" == "0" ]; then
  # shellcheck disable=SC2016
  echo -e '\e[0;33m⮝ ⮝ ⮝ Some HTML entities were escaped ⮝ ⮝ ⮝ \e[0m'
fi
