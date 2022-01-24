/**
 * @description 节流函数
 * @param {Function} fn
 */

function throttle( fn ) {
  const interval = 500
  let lastCallTime = new Date(Date.now() - interval)

  return function() {
    if(new Date() - lastCallTime < interval) return
    fn( ...arguments )
    lastCallTime = new Date()
  }
}