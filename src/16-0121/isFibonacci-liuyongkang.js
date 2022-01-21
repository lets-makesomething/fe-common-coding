/**
 * 
 * @param {*} array 
 * 请补全JavaScript代码，要求以Boolean的形式返回参数数组是否为斐波那契数列。在数学上，斐波那契数列以如下方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N）
注意：
1. [0,1,1]为最短有效斐波那契数列
 */

// 方式1： 遍历实现
/**
 * 判断数组是不是斐波那契数列数组
 * @param {*} array 斐波那契数列数组
 * @returns boolean
 */
const _isFibonacci1 = (array) => {
	// 1. 不是数组抛出错误
	if (!Array.isArray(array))
		throw new TypeError('Parameter must be an array');

	// 2. 不满足最短有效斐波那契数列直接返回false
	if (array.length < 3) return false;

	// 3. 判断是不是斐波那契数列

	// 3.1 初始化一些辅助变量
	let first = array[0], // 第1个数的值
		two = array[1], // 第2个数的值
		index = 1, // 当前遍历的索引位置
		flag = true; // 标识是否是斐波那契数列
	const len = array.length; // 数组长度

	// 3.2 限制第1位和第2位的值
	if (first !== 0 && two !== 1) return false;

	// 3.3 遍历判断前2个数之和是否等于第3个数
	while (index++ < len - 1) {
		// 获取第3个数
		const cur = array[index];
		// 当前3个数不是斐波那契数列，返回false
		if (first + two !== cur) return (flag = false);
		// 重新赋值前2个数的值
		first = two;
		two = cur;
	}

	// 3.4 返回是否是斐波那契数列
	return flag;
};

// 测试案例
console.log('方式1', _isFibonacci1([0, 1])); // false
console.log('方式1', _isFibonacci1([0, 1, 1])); // true
console.log('方式1', _isFibonacci1([0, 1, 1, 3])); // false
console.log('方式1', _isFibonacci1([0, 1, 1, 2, 3, 5, 8])); // true
console.log('------------------------');

// 方式2：使用递归实现

/**
 * 判断数组是不是斐波那契数列数组
 * @param {*} array 斐波那契数列数组
 * @returns boolean
 */
const _isFibonacci2 = (array) => {
	// 1. 不是数组抛出错误
	if (!Array.isArray(array))
		throw new TypeError('Parameter must be an array');

	// 2. 不满足最短有效斐波那契数列直接返回false
	if (array.length < 3) return false;

	// 3. 判断是不是斐波那契数列

	// 3.1 声明一个递归生成斐波那契数列的函数
	function fibonacci(n) {
		if (n == 0) return 0;
		if (n <= 2) return 1;
		return fibonacci(n - 1) + fibonacci(n - 2);
	}

	// 3.2 遍历数组，判断每项和生成斐波那契数列函数返回的值判断是否相等
	// 只要一个不满足斐波那契数列就返回false，否则返回true
	return !array.some((item, index) => item !== fibonacci(index));
};

// 测试案例
console.log('方式2', _isFibonacci2([0, 1])); // false
console.log('方式2', _isFibonacci2([0, 1, 1])); // true
console.log('方式2', _isFibonacci2([0, 1, 1, 3])); // false
console.log('方式2', _isFibonacci2([0, 1, 1, 2, 3, 5, 8])); // true
