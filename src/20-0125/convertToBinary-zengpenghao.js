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
  const str = num.toString(2);
  const len = str.length;
  return len < 8 ? `${'00000000'.slice(len)}${str}` : str;
}
