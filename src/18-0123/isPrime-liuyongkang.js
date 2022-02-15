


/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */

/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 * @param {*} num 
 * @returns boolean
 * @description     质数的定义是：一个大于1的自然数，除了1和它自身之外，不能被其他自然数整除，那么它就是一个质数。
 * @description     1只有1这个因数，所以1不是质数
 */
const isPrime = num => {

    // 1. 必须是一个数字，并且不是NaN
    if (typeof num !== "number" || isNaN(num)) throw new Error("Parameter must be a valid number");

    // 2. 特殊情况
    if (num === 1) return false;

    // 3. 用来计数num的因数的个数
    let count = 0;

    // 4. 遍历num，获取num的因数
    // Math.sqrt给一个数开平方，减少遍历的次数，只要满足一个因数就是质数了
    // Math.sqrt(9) = 3 
    for (let i = 1; i <= Math.sqrt(num); i++) {
        // 是num的因数，count累加1
        if (num % i == 0) {
            count++;
        }
    }
    // 5. 返回是否是质数
    return count == 1;
}

// 测试
console.log(isPrime(1));    // false
console.log(isPrime(2));    // true
console.log(isPrime(14));    // false
console.log(isPrime(61));    // true
console.log(isPrime(67));    // true
console.log(isPrime(91));    // false
console.log(isPrime(97));    // true