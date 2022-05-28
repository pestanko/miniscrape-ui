#! /bin/bash

TARGET="/var/www/lunch"
SOURCE=$PWD

npm run 'build:prod'

cp "$SOURCE" "$TARGET"