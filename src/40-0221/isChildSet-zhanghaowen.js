/**
 *
 * @param {array} a
 * @param {array} b
 * 判断a数组是否为b的子集
 * eg： [1] 是[1,2]的子集，故返回 true
 */

function isChildSet(a, b) {
  if (a.length === 0) {
    return true;
  }
  if (a.length > b.length) {
    return false;
  }
  if (a.length !== [...new Set(a)].length) {
    return false;
  }
  return a.every((item) => b.includes(item));
}
console.log(isChildSet([1, 2, 3], [1, 2, 3, 4]));
