/**
 * @description 节流函数
 * @params {Function} fn
 * @params delay（ms）
 * @params atleast 至少多长时间执行一次
 * returns function
 */

function throttle(fn, delay = 500, atleast = 1000) {
  let timer = null;
  let previous = null;
  return function () {
    let _this = this;
    let args = arguments;
    let now = new Date();
    if (!previous) previous = now;
    if (atleast && now - previous > atleast) {
      fn.apply(_this, args);
      previous = now;
      clearTimeout(timer);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(_this, args);
      }, delay);
    }
  };
}
