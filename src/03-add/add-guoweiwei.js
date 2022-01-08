/**
 * 普通函数
 * @param {*} a
 * @param {*} b
 * @returns
 */
function nornalFunc(params) {
  let arr = Array.from(params);
  let result = arr.reduce((prev, next) => {
    return prev + next;
  }, 0);
  return result;
}
/**
 * 颗粒化函数
 * @param {*} m
 * @returns
 */
function granulationFunc(m) {
  return function () {
    var n = Array.from(arguments)[0];
    return m + n;
  };
}
/**
 * 求和函数
 */
function add() {
  var resultValue;
  if (Array.from(arguments).length > 1) {
    resultValue = nornalFunc(arguments);
  } else {
    resultValue = granulationFunc(Array.from(arguments)[0]);
  }
  return resultValue;
}
add(1, 2, 3); //6
add(1)(2); //3
