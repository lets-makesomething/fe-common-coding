/**
 * @description 节流函数
 * @param {Function} fn 回调函数
 * @param {Number} time 毫秒数
 */
// 第一种（利用时间戳，基本思路：利用闭包，记录时间戳差）
// function throttle(fn, time) {
//     let previous = 0
//     return function () {
//         let context = this
//         let args = arguments
//         let now = Date.now()
//         if (now - previous > wait) {
//             fn.apply(context, args)
//             previous = now
//         }
//     }
// }

// 第二种（利用setTimeout，基本思路：利用闭包，判断setTimeout是否执行结束）
function throttle(fn, time) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (!timer) {
            setTimeout(() => {
                fn.apply(context, args)
                timeout = null
            }, time)
        }
    }
}

export default throttle