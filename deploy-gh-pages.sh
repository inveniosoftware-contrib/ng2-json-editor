#!/bin/bash

git config user.name "inspirehep"
git config user.email "admin@inspirehep.net"

npm run build && ng github-pages:deploy