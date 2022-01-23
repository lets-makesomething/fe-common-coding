
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

const flatten = (arr) => {
    // 补全代码
    return fn(arr, [])
    function fn(arr, init) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'object') {
                init = init.concat([arr[i]])
            } else {
                init = init.concat(fn(arr[i], []))
            }
        }
        return init
    }
}
console.log(flatten([1, [2, [3, [4]]]])) // [ 1, 2, 3, 4 ]
console.log(flatten([1, [2, [3, [4], [4], [4]]]])) // [ 1, 2, 3, 4 ]