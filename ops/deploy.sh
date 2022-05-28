#! /bin/bash

TARGET="/var/www/lunch"
SOURCE="$PWD/build"

npm run 'build:prod'

cp -r "$SOURCE"/* "$TARGET"