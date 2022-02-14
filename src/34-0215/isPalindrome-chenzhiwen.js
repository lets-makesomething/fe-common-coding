/**
 * 判断一个字符串是不是回文
 * input: dad
 * output: true
 */

/**
 * 判断输入字符串是否是回文
 * @param {string} s 待检测字符串
 * @returns {boolean} 判断是否是回文
 */
function isPalindrome(s) {
  // 方法一
  // 获取中间位，判断中间位两侧字符，其中一侧翻转后是否与另一侧相同
  // 方法二
  // 判断输入字符长度是否为奇数，获取中间位，使用栈，中间位左侧入栈，遇到中间位则开始出栈操作，
  // 长度为奇数，跳过中间位，判断出栈元素与中间位右侧元素是否相同；
  // 长度为偶数，判断出栈元素与中间位右侧元素是否相同
  let len = s.length
  let mid = Math.floor(len / 2)
  let flag = len % 2 !== 0
  let temp = [] // 直接用数组替代栈，简化操作
  for (let i = 0; i < len; i++) {
    if (i < mid) {
      temp.push(s[i])
    } else {
      if (flag && i === mid) {
        // 长度为奇数，且遍历到中间位时
        continue
      } else {
        if (temp.pop() !== s[i]) {
          return false
        }
      }
    }
  }
  return true
}
