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
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
 // need use map
 const len = s.length;
 const stack = [];

 if(len % 2 === 1) {
   return false;
 }

 const right = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
 ]);

 for (let ch of s) {
  if (ch === '(' || ch === '{' || ch === '[') {
    stack.push(right.get(ch));
  } else {
    if(!stack.length || stack.pop() !== ch) {
      return false;
    }
  }
 }
 return !stack.length;
};