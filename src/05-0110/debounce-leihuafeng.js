/**
 * 防抖函数
 * 非立即执行版本，
 * @param {Function} fn 函数
 * @param {Number} delay 指定时间间隔
 * @returns {Function}
 */
function debounce (fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay);
  }
}

/**
 * 防抖函数
 * 立即执行版本，
 * @param {Function} fn 函数
 * @param {Number} delay 指定时间间隔
 * @param {boolean} immediate 是否立即执行
 * @returns {Function}
 */
function debounce (fn, delay, immediate) {
  let timer = null
  let lock = null;
  return function () {
    clearTimeout(timer)
    if (immediate) {
      if (!lock) {
        lock = true
        fn.apply(this, arguments)
      }
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay);
  }
}
