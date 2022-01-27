
/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数
 * @param {*} a 
 * @param {*} b 
 * tips: 精度
 */

function multiply(a, b) {
  let m = 0, s1 = a.toString(), s2 = b.toString();
  if (s1.indexOf('.') !== -1) m += s1.split(".")[1].length;
  if (s2.indexOf('.') !== -1) m += s2.split(".")[1].length;
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

console.log(multiply(0.55, 0.8))
console.log(multiply(19.99, 100))
console.log(multiply(0.9, 0.00000001))
console.log(multiply(0.000000012, 0.06))
console.log(multiply(1306377.64, 100))