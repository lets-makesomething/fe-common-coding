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

/**
 * @param {string} s
 * @return {boolean}
 */
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

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   const len = s.length
   if(len%2 !== 0) return false
   const stack = []
   const map = new Map([['(',')'],['[',']'],['{','}']])
   for(let i=0;i<len;i++){
      var item = s[i]
      if(map.has(item)){
        stack.push(item)
      }else{
        const topItem = stack[stack.length-1]
        if(map.get(topItem)===item ){
           stack.pop(item)
        }else{
           return false
        }
      }
   }
   return stack.length===0
};

console.log(isValid('({[]})'))