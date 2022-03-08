/**
 * input: 11111111111111111, 11111111111111111
 * output:22222222222222222
 */

/**
 *
 * @param {*} a 字符串
 * @param {*} b 字符串
 * @returns   {string}
 * @description
 * js最大安全整数为2^53-1，如果给定的两个数超过该范围，需要我们实现该方法，虾皮的笔试题，没做出来，这里想总结下。
   将数字分割为字符串，从后面最后一个数字（个位）开始相加，如果有进位，则下一个数字需要加1，将每个字符串push进去，最后需要reverse一下。
 */
const sum = function (a, b) {
	// 1. 不是一个有效数字
	if (isNaN(a) || isNaN(b)) {
		throw new Error('Parameter must be a valid number');
	}

	// 2. js最大安全整数为2^53-1
	let count = a * 1 + b * 1;
	if (count < Math.pow(2, 53) - 1) return count;

	// 3. 超过最大范围就1个1个加
	const aLen = a.length;
	const bLen = b.length;
	const len = Math.max(aLen, bLen);
	let temp = 0; // 1代表进位了，0代表没有进位
	let total = []; // 每位数字的集合

	for (let i = 0; i < len; i++) {
		// 从最后1位开始相加
		temp += Number(a.charAt(aLen - i - 1)) + Number(b.charAt(bLen - i - 1));
		if (temp > 9) {
			// 如果两数相加大于9，则把余数放进total
			// temp=1 跟下一对相加
			total.unshift(temp % 10);
			temp = 1;
		} else {
			// 如果两数相加小于10，则把余数直接放进total
			total.unshift(temp);
			temp = 0;
		}
	}
	// 4. 把每位数字拼接起来并返回
	return total.join('');
};

// 测试例子
console.log(sum('1111111111111111', '1111111111111111')); // 2222222222222222
console.log(sum('11111111111111111', '11111111111111111')); // 22222222222222222
console.log(sum('12345678901234567890', '12345678901234567890')); // 24691357802469135780
