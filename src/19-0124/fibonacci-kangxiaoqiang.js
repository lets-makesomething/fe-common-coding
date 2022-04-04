
/**
 * 
 * @param {*} n 
 * 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 */




function fibonacci(n) {
    let sqrt_5 = Math.sqrt(5)
    return Math.round(1 / sqrt_5 * (Math.pow((1 + sqrt_5) / 2, n) - Math.pow((1 - sqrt_5) / 2, n)))
}