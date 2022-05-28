#! /bin/bash

TARGET="/var/www/lunch"
SOURCE=$PWD

npm run build

cp "$SOURCE" "$TARGET"