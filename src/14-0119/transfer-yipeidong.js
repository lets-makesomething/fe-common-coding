/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */


function transferWords(s){
  return s.split(' ')
    .map(str => str[0].toUpperCase() + str.substr(1))
    .join(' ')
}