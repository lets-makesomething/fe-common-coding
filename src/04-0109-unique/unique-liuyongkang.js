/**
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 * @example
 * input: [1, 1, 2, 3]
 * output: [1, 2, 3]
 */

// 方式1  object处理
function unique1(arr) {
    // arr = arr.reverse();
    let len = arr.length,
        obj = {};
    while (len--) {
        const item = arr[len];
        // 如果对象中已经有该元素, 说明该元素是重复元素
        if (obj[item] === undefined) obj[item] = item;
    }
    // object的对象的key有按ASII码排序的效果，所以不需要reverse。 可以在while的时候就从0开始就不会有这个问题了
    return Object.values(obj);
}
console.log("方式1", unique1([1, 1, 2, 3]));    // 方式1 [ 1, 2, 3 ]

// 方式2 map处理 
function unique2(arr) {
    // arr = arr.reverse();
    let len = arr.length,
        map = new Map();
    while (len--) {
        const item = arr[len];
        // 如果对象中已经有该元素, 说明该元素是重复元素
        if (!map.has(item)) map.set(item);
    }
    // map的key是按照添加的先后顺序，所以需要reverse一下
    return [...map.keys()].reverse();
}
console.log("方式2", unique2([1, 1, 2, 3]));    // 方式2 [ 1, 2, 3 ]

// 方式3  数组的 forEach + indexOf/includes/some实现
function unique3(arr) {
    const newArr = [];
    arr.forEach(item => newArr.indexOf(item) === -1 && newArr.push(item))
    // arr.forEach(item => !newArr.includes(item) && newArr.push(item))
    // arr.forEach(item => !newArr.some(item2 => item2 === item) && newArr.push(item))
    return newArr;
}
console.log("方式3", unique3([1, 1, 2, 3]));    // 方式3 [ 1, 2, 3 ]

// 方式4  数组的filter + indexOf实现
function unique4(arr) {
    return arr.filter((item, index) => {
        // 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        return arr.indexOf(item, 0) === index;
    });
}
console.log("方式4", unique4([1, 1, 2, 3]));    // 方式4 [ 1, 2, 3 ]

// 方式5  数组的  reduce + indexOf/includes/some方法
function unique5(arr) {
    // return arr.reduce((result, next) => result.indexOf(next) !== -1 ? result : [...result, next], []);
    // return arr.reduce((result, next) => result.includes(next) ? result : [...result, next], []);
    return arr.reduce((result, next) => result.some(item => item === next) ? result : [...result, next], []);
}
console.log("方式5", unique5([1, 1, 2, 3]));    // 方式5 [ 1, 2, 3 ]

// 方式6  使用es6的 Set 实现
function unique6(arr) {
    return [...new Set(arr)];
    // return Array.from(new Set(arr));
}
console.log("方式6", unique6([1, 1, 2, 3]));    // 方式6 [ 1, 2, 3 ]