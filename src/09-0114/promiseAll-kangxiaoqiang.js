/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        try {
            arr = Array.from(promises);
        } catch (error) {
            reject(error)
        }
        let num = 0
        let result = []
        if (arr.length === 0) resolve(result)
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then(res => {
                result[i] = res
                num++
                if (num === arr.length) resolve(result)
            }, err => reject(err)).finally(() => {
            })
        }
    })
}