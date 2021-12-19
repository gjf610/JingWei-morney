#!/usr/bin/env sh

# 发生错误时终止
set -e

yarn build &&
cd dist &&
git init &&
git add -A &&
git commit -m 'deploy' &&
git push -f
cd -