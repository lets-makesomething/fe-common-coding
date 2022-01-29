/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {array} arr
 * @returns {number}
 * @description 输入 [4,1,2,1,2] 输出 4
 * @description 输入 [1 , 1, 2] 输出 2
 */
const onceUnit = arr => {
  if (arr.length % 2 !== 1) {
    throw new Error('输入的数组不符合要求')
  }
  return arr.filter((item, index, arr) => {
    let _arr = arr.slice(0)
    _arr.splice(index, 1)
    return !_arr.includes(item)
  })[0]
}

export default onceUnit
