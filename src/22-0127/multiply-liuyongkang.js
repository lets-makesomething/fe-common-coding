/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数
 * @param {*} a
 * @param {*} b
 * tips: 精度
 */

/**
 *
 * @param {*} a number
 * @param {*} b number
 * @returns number
 * @description 小数点相乘精度问题
 */
function multiply(a, b) {
	// 1. 不是数字
	if (isNaN(a * 1) || isNaN(b * 1)) {
		throw new Error('Parameter must be a valid number');
	}

	// 2. 两个数都是整数，就不存在精度不准的问题
	if (Number.isInteger(a) && Number.isInteger(b)) {
		return a * b;
	}

	// 3. 带小数的计算逻辑

	// 3.1 获取a,b的小数位位数
	const decimalA = a.toString().includes('.')
		? a.toString().split('.')[1].length
		: 0;
	const decimalB = b.toString().includes('.')
		? b.toString().split('.')[1].length
		: 0;

	// 3.2 最大小数位位数
	const maxDecimal = Math.max(decimalA, decimalB);

	// 3.3 需要乘以的最大倍数
	const m = Math.pow(10, maxDecimal);

	// 4. 返回结果
	return (a * m * (b * m)) / m / m;
}
// 测试例子:
console.log(multiply(23, 23)); // 529
console.log(multiply(1, 0.2)); // 0.2
console.log(multiply(0.1, 0.2)); // 0.02
console.log(multiply(0.12, 0.23)); // 0.0276
