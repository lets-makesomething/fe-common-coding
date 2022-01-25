/**
 *
 * @param {*} str
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * input abba
 * output true
 */

function containsRepeatingLetter(str) {
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      i++;
      return true;
    } else {
      i++;
    }
  }
  if (i === str.length) {
    return false;
  }
}
