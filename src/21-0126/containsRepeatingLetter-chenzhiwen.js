/**
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * @param {string} str 
 * @return {boolean}
 * @description 输入 abba 输出 true
 */
function containsRepeatingLetter(str) {
  // abcdeefghhijklmn
  // **cdeefghhijklmn
  // a**deefghhijklmn
  // ab**eefghhijklmn
  // abc**efghhijklmn
  // abcd**fghhijklmn √ 只要找到一个就返回 true
  if (typeof str !== 'string') {
    throw new TypeError('请输入字符串')
  }
  return str.split('').some((item, index, arr) => {
    return index === arr.length - 1 ? false : item === arr[index + 1]
  })
}
