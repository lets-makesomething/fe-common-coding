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

// 递归遍历+reduce实现flatten
function flatten(arr) {
    return arr.reduce(function (prev, cur) {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

let arr = [1, [2, 3, [4, 5], 6], 7];
console.log(flatten(arr));
// [1, 2, 3, 4, 5, 6, 7]

