/**
 *
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

function promiseAll(promises) {
  let res = [];
  let len = promises.length;
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let p in promises) {
      Promise.resolve(promises[p])
        .then((data) => {
          res[p] = data;
          if (++count === len) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}
