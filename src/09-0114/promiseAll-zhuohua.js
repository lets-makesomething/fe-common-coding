/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

/**
 * promise 接收一个数组
 * 返回一个新的 promise 对象
 * promise.all 返回的 promise 完成状态的结果是一个数组
 */
function promiseAll(promises) {
  let result = [];
  let index = 0;
  let len = promises.length;

  return new Promise((resolve, reject) => {
    if (len === 0) {
      resolve(result);
    } else {
      function add(key, value) {
        index++;
        result[key] = value;
        if (index === len) {
          resolve(result);
        }
      }
      for (let i = 0; i < len; i++) {
        Promise.resolve(promises[i]).then(val => {
          add(i, val);
        }, err => {
          reject(err)
        })
      }
    }
  })
}

var promise1 = new Promise((resolve, reject) => {
    resolve(3);
})
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2, promise3]).then(function(values) {
  console.log(values); //[3, 42, 'foo']
},(err)=>{
    console.log(err)
});