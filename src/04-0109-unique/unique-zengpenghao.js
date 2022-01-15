/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */

// 方法1
function unique (arr) {
  let newArr = [];
  let obj = {};
  arr.forEach(item => {
    if (typeof item !== 'object') {
      if (newArr.indexOf(item) === -1) newArr.push(item);
    } else {
      let str = JSON.stringify(item);
      if (!obj[str]) {
        newArr.push(item);
        obj[str] = 1;
      }
    }
  })
  return newArr;
}

// 方法2，不考虑兼容性，而且无法去掉“{}”空对象
function unique2 (arr) {
  return [...new Set(arr)];  
}

// 方法3, “{}”空对象可以去重，但同时有多个对象不行，{a:1},{b:2,c:'aa'}，{}
function unique3 (arr) {
  const obj = {};
  return arr.filter((item, index, arr) => {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
  })
}
