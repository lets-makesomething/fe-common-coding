/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */

//方式一，利用set集合不重复的特性
function unique (arr) {
  return [...new Set(arr)]
}

//方式二，利用includes判断是否存在
function unique1 (arr) {
  return arr.reduce((acc, cur) => acc.includes(cur) ? acc : acc.concat(cur), [])
}

//方式三，filter遍历，indexOf判断,第一次出现位置等于下标。则是代表只有一个元素
function unique2 (arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}