#!/bin/zsh
#
rm -rf ./build

cd scalar
mkdir -p public/spec
cp ../oas/vapix/spec/openapi.yaml public/spec/.
npm run build

cd ..
docker build --tag t .
docker cp $(docker create t):/opt/app build
