/**
 * 
 * @param {*} num 
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
    示例1
    输入：
    65
    输出：
    01000001
 */


function convertToBinary(num) {
   let str = []
   while (num > 0) {
      str.unshift(num % 2)
      num = parseInt(num / 2)
   }
   return str.join('').padStart(8, '0')
}