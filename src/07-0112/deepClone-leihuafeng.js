/**
 * @description 深拷贝
 * @param {Object} target 待拷贝对象
 * @return {Object} 拷贝后的对象
 */

function deepClone (target) {
  if (typeof target !== 'object') {
    return target
  }
  let copy = Array.isArray(target) ? [] : {}
  for (let key in target) {
    copy[key] = deepClone(target[key])
  }
  return copy
}
var target = {
  a: {
    b: 1,
    c: [2, { f: 3 }]
  },
};
var clonedTarget = deepClone(target);
target.a.b = 0;
console.log(target, clonedTarget);