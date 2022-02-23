
/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数
 * @param {number} a 
 * @param {number} b
 * @returns {number} 
 * @description 注意精度
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('input must be number')
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('invalid number')
  }
  // 1.5 * 12.34 => 15 * 1234 / (10 * 100)
  function getRate(num) {
    let str = num.toString()
    return str.indexOf('.') == -1 ? 1 : Math.pow(10, parseInt(str.length - str.indexOf('.') - 1))
  }

  let aRate = getRate(a)
  let bRate = getRate(b)
  return a * aRate * b * bRate / (aRate * bRate)
}

export default multiply
