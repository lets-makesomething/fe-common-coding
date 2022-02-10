/**
 * @description 数组去重
 * @param {Array} arr 
 * @returns {Array}
 */
//方法一 // es6 [...new Set(arr)]

//方法二，reduce
function unique (arr) {
  if (!Array.isArray(arr)) {
    return []
  }
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur)
    }
    return acc
  }, [])
}
// 方法三 filter,indexOf
function unique (arr) {
  if (!Array.isArray(arr)) {
    return []
  }
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(unique([1, 2, 2, 3, 3, 4, 5])) 