#!/bin/sh

echo "building application"

yarn build:css

yarn build:client

echo "copying css"
cp -a dist/client-css/. dist/client/css

echo "build completed"