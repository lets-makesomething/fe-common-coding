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
  const len = promises.length;
  return new Promise((resolve, reject) => {
    if (!len) {
      return;
    }
    for(let i = 0; i < promises.length; i++) {
      const promise = Promise.resolve(promises[i]);
      promise.then(val => resolve(val), err => reject(err));
    }
  })
}
