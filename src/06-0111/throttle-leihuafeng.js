/**
 * @description 节流函数
 * @param {Function} fn
 */

// 定时器版本,会延迟触发。不会立即触发
function throttle (fn, time) {
  let timer
  return function () {
    if (!timer) {
      setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, time)
    }
  }
}

//时间戳版本
function throttle (fn, time) {
  let prev = new Date().getTime()
  return function () {
    let now = new Date().getTime()
    if (now - prev >= time) {
      fn.apply(this, arguments)
      prev = now
    }
  }
}
