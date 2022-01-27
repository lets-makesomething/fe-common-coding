/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数
 * @param {*} a
 * @param {*} b
 * tips: 精度
 */
// 先看精度确定了，就是2个数的小数点位数加起来，然后转换为整数相乘在除以10的精度的次方
function multiply(a, b) {
  let m = 0;
  let s1 = a.toString();
  let s2 = b.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  const num1 = Number(s1.replace(".", ""));
  const num2 = Number(s2.replace(".", ""));
  const res = (num1 * num2) / Math.pow(10, m);
  return res;
}
console.log(multiply(1.22, 1.22222));
