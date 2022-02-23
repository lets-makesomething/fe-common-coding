/**
 * 将数组参数中的多维数组扩展为一维数组并返回该数组
 * @param {array} arr
 * @returns {array}
 * @description 数组参数中仅包含数组类型和数字类型
 * @description 输入 [1,[2,[3,[4]]]] 输出 [1,2,3,4]
 */
const flatten = arr => {
  // 补全代码
  // 类型守卫
  if (!Array.isArray(arr)) {
    throw new TypeError('arr must be array')
  }
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i])
    } else {
      let _result = flatten(arr[i])
      result.push(..._result)
    }
  }
  return result
}

export default flatten
