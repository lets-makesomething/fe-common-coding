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
        let arr = []
        try {
            arr = Array.from(promises);
        } catch (error) {
            reject(error)
        }
        if (arr.length === 0) reject()
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then(res => resolve(res), err => reject(err))
        }
    })
}
