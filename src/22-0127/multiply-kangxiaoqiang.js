
/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数
 * @param {*} a 
 * @param {*} b 
 * tips: 精度
 */



 function multiply(a, b, tip = 2) {
    let l1 = String(a).split('.').length > 1 ? String(a).split('.')[1].length : 0
    let l2 = String(b).split('.').length > 1 ? String(b).split('.')[1].length : 0
    return Math.round((a * Math.pow(10, l1) * b * Math.pow(10, l2)) / (Math.pow(10, l1) * Math.pow(10, l2)) * Math.pow(10, tip)) / Math.pow(10, tip)
  }