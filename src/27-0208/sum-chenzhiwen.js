/**
 * 大数相加
 * @param {string} a
 * @param {string} b
 * @returns {string}
 * @description 输入 11111111111111111, 11111111111111111 输出 22222222222222222
 */
var sum = function(a, b) {
  let result = '', temp = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop()
    result = temp % 10 + result
    temp = temp > 9
  }
  return result.replace(/^0+/, '') || 0
}

export default sum
