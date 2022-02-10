/**
 * 实现 promiseRace 只要有一个 promise 完成即可
 * @param {array} promises 
 */
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(res => resolve(res), err => reject(err))
    }
  })
}
