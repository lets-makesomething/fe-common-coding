/**
 * 转换数字为千分位分隔字符
 * @param {number} num 数字
 * @returns {string}
 */
 function transferNum(num) {
  if (Number.prototype.toLocaleString) {
    return Number.prototype.toLocaleString.call(num, 'en-US', {
      maximumFractionDigits: 20 // 尽量不对输入的小数部分做修改
    })
  } else {
    let flag = num > 0 ? true : false;
    const numArr = Math.abs(num).toString().split('.');
    let right = numArr[1] === undefined ? '' : '.' + numArr[1];
    let leftArr = numArr[0].split('');
    let res = [];
    for (let i = leftArr.length - 1, count = 0; i >= 0; i--, count++) {
        if (count % 3 === 0 && i != leftArr.length - 1) res.unshift(',');
        res.unshift(leftArr[i]);
    }
    return flag ? res.join('') + right : '-' + res.join('') + right;
  }
}

export default transferNum
