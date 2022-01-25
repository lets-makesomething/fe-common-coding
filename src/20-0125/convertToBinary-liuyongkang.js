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
	num = Number(num);

	// 3. 10进制转2进制
	num = num.toString(2);

	// 4. 长度不满足 8 位在前面补 0
	return num.padStart(8, 0);
}

// 测试案例
console.log(convertToBinary(8)); // 00001000
console.log(convertToBinary(65)); // 01000001
// console.log(convertToBinary('65')); // 报错
// console.log(convertToBinary('65xx')); // 报错
