#!/bin/bash

ng build --output-path="example-dist" --base-href="https://inveniosoftware-contrib.github.io/ng2-json-editor/"

echo 'hello'
echo $GH_TOKEN
git clone -b gh-pages --single-branch https://${GH_TOKEN}@${GH_REF} gh-pages
git remote -v
rm -rf gh-pages/*.js gh-pages/*.map  gh-pages/assets
cp -r example-dist/* gh-pages
cd gh-pages

git config user.name "inspirehep"
git config user.email "admin@inspirehep.net"

# add and commit
git add .
git commit -m "deployment to github pages"

git push origin gh-pages
