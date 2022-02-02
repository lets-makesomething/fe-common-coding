
/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数
 * @param {*} a 
 * @param {*} b 
 * tips: 精度
 */

function toNonExponential(num) {
    // 转换科学计数法
    const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
}

function multiply(a, b) {
  const aStr = toNonExponential(a);
  const bStr = toNonExponential(b);
  const len = Math.max(aStr.length - aStr.indexOf('.') - 1, bStr.length - bStr.indexOf('.') - 1);

  return parseFloat(a*b).toFixed(len)
}