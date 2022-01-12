/**
 * @description 函数防抖
 * 
 * @param {*} callback 需要防抖的函数
 * @param {*} wait 防抖步长。若大于0，触发后wait毫秒后生效，频繁触发（wait毫秒内）只生效最后一次，
 *              若小于0，则立即触发，频繁触发（-wait毫秒内）只生效第一次
 * @returns 返回一个新的函数该函数的参数即callback的参数
 */
function debounce(callback, wait) {
    if (typeof callback !== 'function') throw new Error(`callback must be an function`)
    if (typeof wait !== 'number') wait = -300
    let timer = null
    return function proxy(...args) {
        let self = this
        if (wait > 0) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback.call(self, ...args)
            }, wait)
        } else {
            if (timer === null) callback.call(self, ...args)
            clearTimeout(timer)
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
            }, -wait)
        }
    }
}
