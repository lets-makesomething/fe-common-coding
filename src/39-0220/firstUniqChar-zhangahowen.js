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
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
console.log(firstUniqChar("leetcode"));
