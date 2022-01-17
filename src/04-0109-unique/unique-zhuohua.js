/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */

// ES6 方法
function unique_set(arr) {
  return [...new Set(arr)];
}

function unique_map(arr) {
  const map = new Map();

  return arr.filter(item => !map.has(item) && map.set(item));
}

// for 循环
function unique_for(arr) {
  const len = arr.length;
  let res = [], i, j;

  for (i = 0; i < len; i++) {
    for (j = 0, resLen = res.length; j < resLen; j++) {
      if (res[j] === arr[i]) {
        break;
      }
    } 

    if (j === resLen) {
      res.push(arr[i]);
    }
  }
  return res;
}