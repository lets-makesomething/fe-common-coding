/**
 *
 * @param {*} n
 * 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 */

/**
 * 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 * @param {*} n
 * @returns num
 * @description f(0) = 0  f(1) = 1, f(2) = 1  f(3) = 2 f(4) = 3
 * @description 规律: f(n) = f(n-1) + f(n-2)
 */
function fibonacci(n) {
	if (n == 0) return 0;
	if (n <= 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
