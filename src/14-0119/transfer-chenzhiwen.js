/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */
function transferWords(s){
  return s.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}

/**
 * let str = 'hello everyone, this is our first question topic.'
 * transferWords(str) // 'Hello Everyone, This Is Our First Question Topic.'
 */

