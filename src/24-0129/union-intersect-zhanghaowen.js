/**
 *
 * @param {array} a
 * @param {array} b
 * 求两个数组的交集和并集
 */

const union = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return "请输入数组";
  }
  let arr = a.concat(b);
  return [...new Set(arr)];
};
console.log(union([1, 2, 3], [2, 3, 4]));
// 第一种求交集
const intersect = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return "请输入数组";
  }
  const arr = a.map((item) => {
    return b.filter((i) => item === i);
  });
  return [...new Set(arr.flat(Infinity))];
};
//第二种求交集
const intersectTwo = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return "请输入数组";
  }
  const arr = a.filter((item) => b.includes(item));
  return arr;
};
console.log(intersect([1, 2, , 4, 3, 6], [2, 3, 6, 6, 4]));
console.log(intersectTwo([1, 2, , 4, 3, 6], [2, 3, 6, 6, 4]));
