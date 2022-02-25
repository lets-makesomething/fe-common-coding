/**
 * 1047. 删除字符串中的所有相邻重复项
    给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

    在 S 上反复执行重复项删除操作，直到无法继续删除。

    在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

    示例：

    输入："abbaca"
    输出："ca"
    解释：
    例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
    
    提示：

    1 <= S.length <= 20000
    S 仅由小写英文字母组成。
 */

/** 移除输入字符中相邻重复的两个字符
 * @param {string} s 待操作的字符串
 * @return {string} 返回操作后的字符串
 */
 var removeDuplicates = function(s) {
  if (typeof s !== 'string') throw new TypeError('s must be a string')
  if (s.length === 0 || s.length > 20000) throw new Error('invalid input')
  if (s.length === 1) return s
  let i = 0
  let reg = /^[a-z]+$/i
  while (i < s.length - 2 && s.length !== 0) {
    if (!reg.test(s[i]) || !reg.test(s[i + 1])) {
      throw new Error('字符串只能由小写英文字母组成')
    }
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2)
      if ( i > 0) i--
    } else {
      i++
    }
  }
  return s
}

export default removeDuplicates
