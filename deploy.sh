#!/usr/bin/env sh

# 发生错误时终止
set -e

yarn build &&
cd dist &&
git init &&
git add -A &&
git commit -m 'deploy' &&
git remote add origin git@github.com:gjf610/morney-website.git &&
git push -u origin master -f
cd -