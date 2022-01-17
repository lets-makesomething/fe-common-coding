/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */
 function promiseAll(promises) {
   let result = [];
   let index=0
   return new Promise((resolve, reject)=> {
     function addData(key, value) {
       result[key]=value
       index++;
       if(index===promises.length){
        resolve(result)
       }
     }
    for(let i=0; i<promises.length; i++) {
      let current = promises[i]
      if(current instanceof Promise){
        current.then((value) => addData[i]=value,reason=>reject(reason))
      }else{
        addData(i,promises[i])
      }
    }
   })
 }
