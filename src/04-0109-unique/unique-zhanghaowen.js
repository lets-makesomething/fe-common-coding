/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */
/**
  Array.from() 方法对一个类似数组或可迭代对象创建一个新的，
  浅拷贝的数组实例。比如map和set结构这种，具有Iteratior这种属性
  */
// 1.利用ES6 Set去重（ES6中最常用）
//    function unique(arr) {
//        return Array.from(new Set([...arr]))
//    }
// 2.利用for嵌套for，然后splice去重（ES5中最常用）
//    function unique(arr){
//        for(let i = 0;i<arr.length;i++){
//            for(let j = i+1;j<arr.length;j++){
//                if(arr[i]===arr[j]){
//                    arr.splice(j,1)
//                    j--
//                }
//            }
//        }
//        return arr
//    }
//3. 利用indexOf去重
// function unique(arr){
//     let newArray = []
//     arr.forEach(item=>{
//         if(newArray.indexOf(item)===-1){
//             newArray.push(item)
//         }
//     })
//     return newArray
// }
// 4.利用对象的key唯一
// function unique(arr){
//     let obj = {}
//     for(let i =0;i<arr.length;i++){
//         const item = arr[i]
//         if(obj[item]!==undefined){
//             arr.splice(i,1);
//             i--
//             continue;
//         }
//         obj[item] = item
//     }
//     return arr
// }
// 5.利用filter和indexOf来进行去重
// 原理：返回 item 第一次出现的位置等于当前的index的元素
// function unique(arr){
//     return arr.filter((item,index)=>{
//         return arr.indexOf(item) === index
//     })
// }
// 6.利用数组的sort方法然后两两比较
// function unique(array){
//     const arr = array.sort()
//     const newArray = [arr[0]]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]!==arr[i-1]){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }
// 7.利用数组的includes方法
// function unique(arr){
//     const array = []
//     arr.forEach(item=>{
//         if(!array.includes(item)){
//             array.push(item)
//         }
//     })
//     return array
// }
// 8.利用Map结构来去重
// function unique(arr){
//     const map = new Map()
//     const newArray = []
//     arr.forEach(item=>{
//         if(!map.has(item)){
//             map.set(item,'true')
//             newArray.push(item)
//         }
//     })
//     return newArray
// }
// 9.利用数组的reduce方法和concat方法
function unique(arr) {
  const array = arr.reduce((accu, cur) => {
    return accu.includes(cur) ? accu : [...accu, cur];
  }, []);
  return array;
}
console.log(unique([1, 2, 1, 2, 3]));
