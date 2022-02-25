/**
 * 3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 
提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // need use map
  if (typeof s !== 'string') {
    throw new Error('s must be a string')
  }
  if (s.length === 0) {
    return 0
  }
  let max = 0
  let map = new Map()
  let start = 0
  while (start <= s.length - 1) {
    if (map.has(s[start])) { // 如果有重复字符
      start = map.get(s[start]) + 1
      map.clear()
    } else {  // 没有重复字符
      map.set(s[start], start)
      max = Math.max(max, map.size)
      start++
    }
  }
  return max
}