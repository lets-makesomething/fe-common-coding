/**
 * @description 节流函数
 * @param {Function} fn
 * 
 * @param {*} callback 需要节流的函数
 * @param {*} wait 防抖步长。若大于0，触发后wait毫秒后生效，频繁触发（wait毫秒内）不再生效，
 *              若小于0，则立即触发，频繁触发（-wait毫秒内）不再生效
 */

function throttle(callback, wait) {
    if (typeof callback !== 'function') throw new Error(`callback must be an function`)
    if (typeof wait !== 'number') wait = -300
    let timer = null
    return function proxy(...args) {
        let self = this
        if (wait > 0) {
            if (timer === null) {
                timer = setTimeout(() => {
                    callback.call(self, ...args)
                    clearTimeout(timer)
                    timer = null
                }, wait)
            }
        } else {
            if (timer === null) {
                callback.call(self, ...args)
                timer = setTimeout(() => {
                    clearTimeout(timer)
                    timer = null
                }, -wait)
            }
        }
    }
}