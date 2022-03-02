/**
 * 
 * @param {*} num 
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
    示例1
    输入：
    65
    输出：
    01000001
 */

/**
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 * @param {*} num   number
 * @returns         string 二进制字符串
 */

// 实现方式
function convertToBinary(num) {
	// 1. 必须是一个数字，并且不是NaN
	if (typeof num !== 'number' || isNaN(num))
		throw new Error('Parameter must be a valid number');

	// 2. 转换成数字
	let newNum = Number(Math.abs(num));

	// 3. 10进制转2进制
	newNum = newNum.toString(2);

	// 4. 长度不满足 8 位在前面补 0
	newNum = newNum.padStart(8, 0);

	// 5. 返回二进制数
	return `${num > 0 ? '' : '-'}${newNum}`;
}

// 测试案例
console.log(convertToBinary(12)); // 00001100
console.log(convertToBinary(-12)); // -00001100
// console.log(convertToBinary('65')); // 报错
// console.log(convertToBinary('65xx')); // 报错

// 验证二进制字符串转成10进制的数
console.log(parseInt(convertToBinary(12), 2)); // 12
console.log(parseInt(convertToBinary(-12), 2)); // -12