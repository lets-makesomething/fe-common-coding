/**
 *
 * @param {array} promises
 * @description 实现Promise.race方法
 * @example
 * input: Array<Promise>
 * output: Promise
 *
 */

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (var i = 0; i < promises.length; i++) {
            const p = Promise.resolve(promises[i])
            p.then(res => {
                resolve(res)
            }).catch(error => reject(error))
        }
    })
}
const promise1 = Promise.resolve('promise1')
const promise2 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise2')
        })
    })
})()
const promise3 = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise3')
        }, 1000)
    })
})()

promiseRace([promise1, promise2, promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
export default promiseRace