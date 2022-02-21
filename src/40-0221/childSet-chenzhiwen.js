/**
 * 判断a数组是否为b的子集
 * @param {array} a
 * @param {array} b
 * @description [1] 是[1,2]的子集，故返回 true
 */
function isChildSet(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError('参数必须是数组')
  }
  if (a.length > b.length) {
    return false
  }
  return a.every(item => b.includes(item))
}
