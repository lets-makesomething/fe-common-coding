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
   return new Promise( (resolve, reject)=> {
    promises.forEach((item)=> {
      Promise.resolve(item).then((value)=>{
        resolve(value)
      }),reason=>{
        reject(reason)
    }})
   })
 }
