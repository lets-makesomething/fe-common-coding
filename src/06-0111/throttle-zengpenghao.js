/**
 * @description 节流函数
 * @param {Function} fn
 * @param {Number} wait
 */

function throttle(fn, wait = 500) {
  let timer;
  return function () {
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, wait);
    }
  };
}
