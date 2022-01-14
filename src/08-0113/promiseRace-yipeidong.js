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
     for(const promise of promises) {
       promise.then(resolve, reject)
     }
   })
 }