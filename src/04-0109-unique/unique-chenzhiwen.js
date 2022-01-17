/**
 * @description 数组去重
 * @param {Array} arr 
 * @returns {Array}
 */
 function unique(arr) {
  // 偷懒版本 return Array.from(new Set(arr))
  if (!Array.isArray(arr)) {
    return []
  }
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i])
    }
  }
  return array
}

export default unique
