
/**
 * 获取两个数组的并集
 * @param {array} a 
 * @param {array} b 
 * @returns {array}
 */
const union = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('input must be array')
  }
  return a.concat(b)
}

/**
 * 获取两个数组的交集
 * @param {array} a 
 * @param {array} b 
 * @returns {array}
 */
const intersect = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('input must be array')
  }
  return a.filter(n => b.includes(n))
}

export { union, intersect }
