#! /bin/bash

file=.gitignore

sed '112d' $file > $file.tmp

rm $file
rename $file.tmp $file