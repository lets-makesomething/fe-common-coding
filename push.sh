#! /bin/bash

file=.gitignore
# git rm -r --cached .

sed '112d' $file > $file.tmp
mv $file.tmp $file
git pull
git add .
git commit -m "feat: new challenge coming"
git push