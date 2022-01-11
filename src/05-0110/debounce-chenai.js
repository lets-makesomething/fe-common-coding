/**
 * @description 函数防抖
 */

// 第一种 非立即执行 
// function debounce(func, time) {
//     let timer = null
//     return function () {
//         if (timer) clearTimeout(timer)
//         let context = this
//         let args = arguments
//         setTimeout(() => {
//             func.call(context, args)
//         }, time)
//     }
// }
// 第二种 立即执行版
function debounce(func, time) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (timer) clearTimeout(timer)
        func.call(context, args)
        setTimeout(() => {
            timer = null
        }, time)
    }
}

export default debounce
