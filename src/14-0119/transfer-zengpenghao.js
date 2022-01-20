/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */


function transferWords(s) {
  return s.replace(/(\s|^)[a-z]/g, match => match.toUpperCase());
}