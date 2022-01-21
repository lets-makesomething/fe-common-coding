/**
 * 判断参数数组是否为斐波那契数列
 * @param {array} array 
 * @returns {boolean}
 * @description 斐波那契数列以如下方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N）
 * @description [0,1,1]为最短有效斐波那契数列
 */
const _isFibonacci = array => {
  // 补全代码
  if (!Array.isArray(array) || array.length < 3) {
    return false
  }
  const fibFn = (n) => {
    if (n == 0) {
      return 0
    }
    if (n == 1 || n == 2) {
      return 1
    }
    return fibFn(n -2) + fibFn(n - 1)
  }
  return !array.some((item, index) => item !== fibFn(index))
}

/**
 * 测试用例
 * [0, 1] => false
 * [0, 1, 1] => true
 * [0, 1, 2] => false
 * [0, 1, 1, 2] => true
 */
