/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */

// 方法一：遍历，使用includes，indexOf等api去判断新数组中是否包含该元素
function unique(arr) {
  let newArr = []
  arr.forEach((x)=>{
    if(!newArr.includes(x)){
      newArr.push(x)
    }
  })
  return newArr
}

// 方法二：ES6语法 不考虑兼容性，这种去重的方法代码最少。
function unique (arr) {
  return Array.from(new Set(arr))
}
console.log(unique([1, 1, 2, 3]))
