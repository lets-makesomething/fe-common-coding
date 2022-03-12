/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */

// 以下的所有排序都针对非引用类型

// 第一种 (利用ES6的new Set)
// function unique(arr) {
//     if (!Array.isArray(arr)) return
//     return Array.from(new Set(arr))
// }


// 第二种（双层循环嵌套）
// function unique(arr) {
//     if (!Array.isArray(arr)) return
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 arr.splice(j, 1)
//             }
//         }
//     }
//     return arr
// }

// 第三种 (利用map数据结构，以属性作为键)
// function unique(arr) {
//     if (!Array.isArray(arr)) return
//     let map = new Map()
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(arr[i])) {
//             arr.splice(i, 1)
//         } else {
//             map.set(arr[i], true)
//         }
//     }
//     return arr
// }

// 第四种（利用对象，以属性作为键）
// function unique(arr) {
//     if (!Array.isArray(arr)) return
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj.hasOwnProperty(arr[i])) {
//             arr.splice(i, 1)
//         } else {
//             obj[arr[i]] = true
//         }
//     }
//     return arr
// }

// 第五种 reduce
function unique(arr) {
    if (!Array.isArray(arr)) return
    return arr.reduce((prev, cur, index, arr) => {
        return prev.includes(cur) ? prev : prev.concat([cur])
    }, [])
}


