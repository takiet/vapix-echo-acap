#!/bin/zsh
#
rm -rf ./build

cd scalar
npm run build

cd ..
docker build --tag t .
docker cp $(docker create t):/opt/app build
