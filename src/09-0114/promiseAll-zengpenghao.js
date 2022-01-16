/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

function promiseAll(promises) {
  const arr = Array.from(promises);
  const len = arr.length;
  const res = [];
  let idx = 0;
  
  return new Promise((resolve, reject) => {
    const addData = (key, val) => {
      res[key] = val;
      idx++;
      if (idx === len) resolve(res);
    }

    for (let i = 0; i < len; i++) {
      const item = arr[i];
      if (item instanceof Promise) {
        item.then(v => addData(i, v), err => reject(err));
      } else {
        addData(i, item);
      }
    }
  });
}
