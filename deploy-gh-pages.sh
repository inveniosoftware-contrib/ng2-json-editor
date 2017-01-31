#!/bin/bash

ng build --output-path="example-dist" --base-href="https://inveniosoftware-contrib.github.io/ng2-json-editor/"
npm run typedoc

git clone -b gh-pages --single-branch https://${GH_TOKEN}@${GH_REF} gh-pages
rm -rf gh-pages/*
cp -r example-dist/* gh-pages
cd gh-pages
# Needed for docs to be accessible (since names start with underscore)
touch .nojekyll

git config user.name "inspirehep"
git config user.email "admin@inspirehep.net"

# add and commit
git add .
git commit -m "deployment to github pages"

git push --quiet origin gh-pages > /dev/null 2>&1
