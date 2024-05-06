#!/usr/bin/env bash

set -eu

lang=$1

echo '{
}' > "src/client/${lang}.json"

echo '{
}' > "src/server/${lang}.json"

ls -1 src/*/${lang}.json
echo "Commit new languages '$lang' src files ? y/N"
read reponse
if [ "$reponse" = 'y' ] ; then
  git reset .
  git add "src/client/${lang}.json" "src/server/${lang}.json"
  git commit -m "add new language: ${lang}"
fi
