/**
 * 844. 比较含退格的字符串
  给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

  注意：如果对空文本输入退格字符，文本继续为空。

  示例 1：

  输入：s = "ab#c", t = "ad#c"
  输出：true
  解释：s 和 t 都会变成 "ac"。
  示例 2：

  输入：s = "ab##", t = "c#d#"
  输出：true
  解释：s 和 t 都会变成 ""。
  示例 3：

  输入：s = "a#c", t = "b"
  输出：false
  解释：s 会变成 "c"，但 t 仍然是 "b"。
  
  提示：

  1 <= s.length, t.length <= 200
  s 和 t 只含有小写字母以及字符 '#'
 */

/** 比较两个含退格的字符串是否相等
 * @param {string} s 待比较的字符串
 * @param {string} t 待比较的字符串
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  // 边界检测
  if (!(1 <= s.length && s.length <= 200 && 1 <= t.length && t.length <= 200)) throw new Error('输入的字符串长度不符合要求')
  // 字符类型判断放在遍历中进行
  let stackS = []
  let stackT = []
  for (let i = 0; i < s.length; i++) {
    if (!(/[a-z]/.test(s[i])) && !(/#/.test(s[i]))) {
      throw new Error('输入的字符串不符合要求')
    }
    if (s[i] === '#') {
      if (stackS.length > 0) {
        stackS.pop()
      }
    } else {
      stackS.push(s[i])
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!(/[a-z]/.test(t[i])) && !(/#/.test(t[i]))) {
      throw new Error('输入的字符串不符合要求')
    }
    if (t[i] === '#') {
      if (stackT.length > 0) {
        stackT.pop()
      }
    } else {
      stackT.push(t[i])
    }
  }
  return stackS.join('') === stackT.join('')
}
