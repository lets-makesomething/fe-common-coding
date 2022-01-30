/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */
const isPrime = (num) => {
    if (validate(num)) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true //非质数
    }
    return false

    function validate(num) {
        return /^\d+$/.test(num) && num > 1
    }
}

console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(10))