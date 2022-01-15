/**
 * 整数值类型处理
 * @param {*} num  要处理的参数
 */
function integerDeal(num) {
  return num.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
    return s + ",";
  });
}
/**
 * 浮点数类型处理，并保留两位小数
 * @param {*} num
 */
function floatDeal(num) {
  return (num.toFixed(2) + "").replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}
/**
 * 将数值进行千分位转换
 * @param {*} num 要处理的参数，如果传入的不是数值类型则直接返回
 */
function transferNum(num) {
  let resultStr = "";
  // 如果参数是number类型并且为真值，否则则返回num
  if (typeof num == "number" && !!num) {
    if (num.toString().includes(".")) {
      //   浮点出
      resultStr = floatDeal(num);
    } else {
      // 整数
      resultStr = integerDeal(num);
    }
  } else {
    resultStr = num;
  }
  return resultStr;
}
console.log(transferNum("123"), "222");  // "123"
console.log(transferNum(1234567.1234), "222"); // "1,234,567.12"
console.log(transferNum(123456789033), "222"); // 123,456,789,033