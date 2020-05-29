#!/usr/bin/env sh

set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'deploy to gh-pages'

git push -f git@github.com:rgvillanueva28/random-trash-and-shits.git master:gh-pages

cd -