/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */



//  function curry(fn,...args){
//     var length = fn.length;//代表函数fn的参数数量
//     return function(...nextArgs){
//         var allArgs = [...args,...nextArgs];//收集参数
//         if(allArgs.length >= length)
//             return fn.apply(null,allArgs); //当参数足够时则调用原函数
//         return curry(fn,...allArgs); //不够参数则,继续递归调用
//     }
// }

function add1(a,b){
    return a+b;
}
function add(a){
    return function(b){
        return b+a;
    }
}
console.log(add1(1,2),add(1)(2))






