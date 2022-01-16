/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

function promiseAll(promises) {
    const arr = []
    return new Promise(function (resolve, reject) {
        // 如果promises为空。则返回一个空数组
        if (promises.length == 0) resolve(arr)
        for (let i = 0; i < promises.length; i++) {
            let p = Promise.resolve(promises[i])
            p.then(res => {
                arr.push(res)
                if (i == promises.length - 1) resolve(arr)
            }).catch(error => error)
        }
    })
}
const promise1 = 42
const promise2 = Promise.resolve(3)
const promise3 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise3')
        }, 1000)
    })
})()

promiseAll([promise1, promise2, promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})