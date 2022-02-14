/**
 * 20. 有效的括号
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

    有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    

    示例 1：

    输入：s = "()"
    输出：true
    示例 2：

    输入：s = "()[]{}"
    输出：true
    示例 3：

    输入：s = "(]"
    输出：false
    示例 4：

    输入：s = "([)]"
    输出：false
    示例 5：

    输入：s = "{[]}"
    输出：true
 */

/** 判断输入的括号字符是否是成对闭合出现
 * @param {string} s 输入的括号字符
 * @return {boolean} 是否是成对闭合
 */
var isValid = function(s) {
  if (s.length % 2 === 1) {
    return false
  }
  class Stack {
    constructor () {
      this.items = []
    }
    push (item) {
      this.items.push(item)
    }
    pop () {
      return this.items.pop()
    }
    isEmpty () {
      return this.items.length === 0
    }
    clear () {
      this.items = []
    }
  }
  let stack = new Stack()
  let left = '([{'
  let right = ')]}'
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i])
    } else {
      let _left = stack.pop()
      let _leftIndex = left.indexOf(_left)
      if (right[_leftIndex] !== s[i]) {
        return false
      } else {
        continue
      }
    }
  }
  return true
}

export default isValid
