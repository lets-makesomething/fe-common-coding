/**
 * promiseAll 当传入的 promises 数组中所有 promise 都完成时，才会返回包含完成结果的数组，否则只会返回拒绝 promise 的原因
 * @param {*} promises 
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 根据 MDN 对 Promise.all 返回值的定义
    // 如果传入的不是可迭代对象，TypeError
    if (!(promises && typeof promises[Symbol.iterator] === 'function')) {
      reject(new TypeError('object is not iterable'))
    }
    // 如果传入的参数是一个空的可迭代对象，则返回一个已完成的 promise
    else if ((Array.isArray(promises) && promises.length === 0) || promises === '') {
      resolve([])
    }
    // 如果传入的参数不包含任何 promise，则返回一个异步完成的 Promise（chrome 58 会返回一个已完成的 promise）
    else if (!Array.prototype.some.call(promises, (promise) => promise instanceof Promise)) {
      setTimeout(() => {
        resolve(promises)
      }, 0)
    }
    // 其他情况返回一个处理中的 promise，等待其中所有的 promise 元素都完成时，该 promise 返回值变为完成；或者只要有一个 promise 元素失败，返回值就变为失败
    else {
      let count = 0
      let result = []
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(res => {
          count++
          result[index] = res
          if (count === promises.length) {
            resolve(result)
          }
        }).catch(err => reject(err))
      })
    }
  })
}
