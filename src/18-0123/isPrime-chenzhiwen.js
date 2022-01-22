/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false
 * @param {number} num 待判断的数字
 * @returns {boolean} 判断结果
 */
const isPrime = num => {
  if (typeof num !== 'number') {
    throw new TypeError('num must be number')
  }
  if (Number.isNaN(num)) {
    return false
  }
  if (!Number.isInteger(num) || num % 1 !== 0 || !Number.isSafeInteger(num)) {
    return false
  }
  if (num <= 1) {
    return false
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}

export default isPrime
