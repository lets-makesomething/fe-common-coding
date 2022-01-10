/**
 * 防抖函数
 * @param {Function} fn 函数
 * @param {Number} delay
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default debounce
