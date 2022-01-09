/**
 * 数组去重
 * @param {*} arr
 * @returns
 */
function unique(arr) {
//   return Array.from(new Set(arr));
  return [...new Set(arr)];
}
console.log(unique([1,2,3,2,3]))