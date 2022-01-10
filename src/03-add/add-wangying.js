/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */

// 函数柯里化
function curry(fn, arg){
   let args = arg||[]
   return function (){
    let _args = args.slice(0)
    _args = _args.concat(...arguments)
    if(_args.length >= fn.length){
      return fn.apply(this, _args)
    } else{
      return curry.call(this, fn, _args)
    }
  }
}
var add = curry((a, b) => (a + b));
console.log(add(1,2))
console.log(add(1)(2))






