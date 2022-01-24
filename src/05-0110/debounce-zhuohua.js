/**
 * @description 函数防抖
 */

function debounce(fn, delay, immediate) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
  
    timeout && clearTimeout(timeout);

    if (immediate) {
      let now = !timeout;

      timeout = setTimeout(() => {
        timeout = null;
      }, delay);

      if (now) {
        fn.apply(context, args);
      }
    } else {
      timeout = setTimeout(() => {
        // 改变 this 指向
        fn.apply(context, args);
      }, delay);
    }
  }
}
