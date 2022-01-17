/**
 * @description 节流函数
 * @param {Function} fn
 */

function throttle(fn, delay) {
  let context, args;
  let previous = 0;

  return function () {
    let now = +new Date(); // 转化成时间戳
    context = this;
    args = arguments

    if (now - previous > delay) {
      fn.apply(context, args)
      previous = now;
    }
  }
}