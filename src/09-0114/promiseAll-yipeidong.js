/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

 function promiseAll(promises) {
   return new Promise((resolve, reject) => {
      const resultArr = []
      let successCount = 0
      let i = 0
      for(const promise of promises) {
        const index = i++
        promise.then(data => {
          resultArr[index] = data
          successCount++
          if(successCount === promises.length) resolve(resultArr)
        }, reject)
      }
   })
 }
