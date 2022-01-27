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

// 第一种解法：利用number.toString(radix),其中radix表示转换为多少进制
function convertToBinary(num) {
  if (num < 0||num>255) {
    return "输入的数字只能在0-255之间";
  }
  let str = num.toString(2);
  let string = "";
  if (str.length < 8) {
    for (let i = 0; i < 8 - str.length; i++) {
      string += "0";
    }
  }
  return string.concat(str);
}
console.log(convertToBinary(-1));
// 第二种解法 利用栈的先进后出，取余来做，
//   function convertToBinary(num) {
//     if(num<0){
//         return '不能为负数'
//     }
//     let arr = [];
//     while (num > 0) {
//       arr.push(num % 2);
//       num = Math.floor(num / 2);
//     }
//     const arr2 = [];
//     let string = "";
//     while (arr.length > 0) {
//       arr2.push(arr.pop());
//     }
//     if (arr2.length < 8) {
//       for (let i = 0; i < 8 - arr2.length; i++) {
//         string += "0";
//       }
//     }
//     const str = arr2.join("");
//     return string.concat(str);
//   }
