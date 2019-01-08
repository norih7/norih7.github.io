#!/bin/bash

# シェルスクリプトがある場所まで移動する
cd `dirname $0`

DATE=$(date "+%Y-%m-%d")

TEMPLATE_PATH=./template.md
PAGES_PATH=../../pages

echo "entry directory:"
read ENTRY_DIRECTORY

DIRECTORY_PATH="${PAGES_PATH}/${ENTRY_DIRECTORY}"

ENTRY_FILE="${DIRECTORY_PATH}/index.md"

/bin/mkdir $DIRECTORY_PATH
/bin/cp $TEMPLATE_PATH $ENTRY_FILE

sed -e "s/#PATH#/${ENTRY_DIRECTORY}/" -e "s/#DATE#/${DATE}/" $TEMPLATE_PATH 