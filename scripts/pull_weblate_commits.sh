#!/usr/bin/env bash
git remote show weblate > /dev/null || git remote add weblate https://weblate.framasoft.org/git/inventaire/server/
git pull weblate main