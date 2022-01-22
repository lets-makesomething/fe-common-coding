
/**
 * 返回斐波那契数列中第 n 个数
 * @param {number} n 序号
 * @returns {number} 第 n 个斐波那契数
 * @description f(1) = 1, f(2) = 1 等
 */
function fibonacci(n) {
  if (typeof n !== 'number') {
    throw new TypeError('n must be number')
  }
  if (Number.isNaN(n)) {
    throw new Error("n can't be NaN")
  }
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
}
