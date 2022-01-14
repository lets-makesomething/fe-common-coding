#! /bin/bash

file=.gitignore
time=$(date "+%Y-%m-%d %H:%M:%S")

cd /root/fe-common-coding/
git pull

sed '112d' $file > $file.tmp
mv $file.tmp $file

git rm -r --cached .
git add .
git commit -m "feat: ${time} new challenge coming"
git push