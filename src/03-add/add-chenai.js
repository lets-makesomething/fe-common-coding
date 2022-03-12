/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */
function curry(func) {
    return function cb(...args) {
        // func.length   表示getSum形参个数
        // 如果传入cb的形参个数小于func的形参个数，则递归（将每次传入的参数和下次传入的参数一起传入）
        //，直到参数等于func的形参个数为止
        if (args.length < func.length) {
            return function () {
                // arguments 代表下一次的参数
                return cb(...args.concat(Array.from(arguments)))
            }
        }
        return func(...args)
    }
}

// 如果add传入的实参个数超过了getSum的形参个数，则报错，因为当形参和实参相等时，就已经返回了结果，再次调用时返回的不是一个函数
function getSum(a, b) {
    return a + b
}

let add = curry(getSum)

export default add
