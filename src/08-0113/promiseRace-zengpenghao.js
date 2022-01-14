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
  const arr = Array.from(promises);
  const len = arr.length;

  return new Promise((resolve, reject) => {
    if (!len) return;
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i]).then(res => {
        resolve(res);
        return;
      }, err => reject(err));
    }
  });
}
