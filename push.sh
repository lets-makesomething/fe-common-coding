#! /bin/bash

file=.gitignore
time=$(date "+%Y-%m-%d %H:%M:%S")
git rm -r --cached .

sed '112d' $file > $file.tmp
mv $file.tmp $file
git pull
git add .
git commit -m "feat: ${time} new challenge coming"
git push