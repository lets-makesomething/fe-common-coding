/**
 * 387. 字符串中的第一个唯一字符
  给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

  

  示例 1：

  输入: s = "leetcode"
  输出: 0
  示例 2:

  输入: s = "loveleetcode"
  输出: 2
  示例 3:

  输入: s = "aabb"
  输出: -1
  

  提示:

  1 <= s.length <= 105
  s 只包含小写字母
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (typeof s !== 'string') {
    throw new TypeError('input must be string')
  }
  let len = s.length
  if (len === 1) {
    return 0
  }
  if (len > 105) {
    throw new Error('参数长度超过限制')
  }
  if (!/^[a-z]+$/g.test(s)) {
    throw new Error('参数只能包含小写字母')
  }
  let targetIndex = -1
  let arr = s.split('')
  let flag = arr.some((item, index, arr) => {
    targetIndex = index
    let _arr = arr.slice(0, index).concat(arr.slice(index + 1))
    return !_arr.includes(item)
  })
  return flag ? targetIndex : -1
}

export default firstUniqChar
