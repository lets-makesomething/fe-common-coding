/**
 * 
 * @param {*} arr
 * 描述
请补全JavaScript代码，要求将数组参数中的多维数组扩展为一维数组并返回该数组。
注意：
1. 数组参数中仅包含数组类型和数字类型
示例1
输入：
[1,[2,[3,[4]]]]
输出：
[1,2,3,4] 
 */

//   const flatten = (arr) => {
//     // 补全代码
//     return arr.flat(Infinity)
//   };
//   const flatten = (arr) => {
//     // 补全代码
//     // return arr.flat(Infinity)
//     return arr.reduce((result,item)=>{
//         return result.concat(Array.isArray(item)?flatten(item):item)
//     },[])
//   };
const flatten = (arr) => {
  let res = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res = res.concat(item);
    }
  });
  return res;
};
