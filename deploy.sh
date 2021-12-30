#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist
git init --initial-branch=main
git add -A
git commit -m 'deploy'
git push -f git@github.com:g5search/opex-runbook.git main:gh-pages
cd -
