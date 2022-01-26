/**
 * 
 * @param {*} str 
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * input abba
 * output true
 */

function containsRepeatingLetter(str) {
  // 利用()进行分组，斜杠加数字表示引用
  // \1就是引用第一个分组，将[a-zA-Z]做为一个分组，然后引用判断是否有，有说明有连续重复
  return /([a-zA-Z])\1/.test(str);
}
