/**
 * 
 * @param {*} array 
 * 请补全JavaScript代码，要求以Boolean的形式返回参数数组是否为斐波那契数列。在数学上，斐波那契数列以如下方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N）
注意：
1. [0,1,1]为最短有效斐波那契数列
 */

const _isFibonacci = (array) => {
    if (!Array.isArray(array)) {
        throw 'params is not a array'
    }
    for (let i = 0; i < array.length - 2; i++) {
        let cur = array[i]
        let next = array[i + 1]
        let sum = array[i + 2]
        if (cur + next !== sum) {
            return false
        }
    }
    return true
}

