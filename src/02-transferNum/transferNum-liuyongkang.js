/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

// 方式1: 利用字符串和数组的方法操作
// 将 10000 => 10.000
function transformNum1(num) {
	// 如果是数字或者字符串并且不是NaN的数字才进行转换
	if ((typeof num === 'number' || typeof num === 'string') && !isNaN(num)) {
		// 如果是number就转成字符串
		num = typeof num == 'number' ? String(num) : num;

		// 通过.分割获取整数和小数部分
		let [intergerNum, decimalNum] = num.split('.'); // 获取整数

		// 整数部分少于3位数直接返回
		if (intergerNum.length < 3) return intergerNum;

		// 把整数遍历生成一串每项由3位整数组合的数组        1234567    =>  ["234","567"]
		const formatStrArray = [];
		while (intergerNum.length > 3) {
			const index = intergerNum.length - 3;
			formatStrArray.unshift(intergerNum.slice(index));
			intergerNum = intergerNum.slice(0, index);
		}

		// 将最后一位不满足3位数的整数添加到最前面          1234567   =>    ["1", "234","567"]
		formatStrArray.unshift(intergerNum);

		// 最后拼接整数和小数部分返回
		return formatStrArray.join(',') + (decimalNum ? `.${decimalNum}` : '');
	} else {
		// 不是number或者string类型直接返回
		return num;
	}
}
// 测试案例1:
// 整数位小于3位数
console.log(transformNum1('123.24')); // 123.24
// 不带小数的
console.log(transformNum1('1234567890')); // 1,234,567,890
// 带小数的
console.log(transformNum1('1234567890.123')); // 1,234,567,890.123
// 错误的数字
console.log(transformNum3('fwe')); // fwe

// 方式2: 正则加数组的方法
function transformNum2(num) {
	// 如果是数字或者字符串并且不是NaN的数字才进行转换
	if ((typeof num === 'number' || typeof num === 'string') && !isNaN(num)) {
		// 如果是number就转成字符串
		num = typeof num == 'number' ? String(num) : num;

		// 通过.分割整数和小数
		num = String(num).split('.');

		// 整数部分少于3位数直接返回
		if (num[0] < 3) return num.join('.');

		// 使用正则处理整数部分(每3位加一个,)
		num[0] = num[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,');

		// 拼接整数和小数部分，并返回
		return num.join('.');
	} else {
		return num;
	}
}
// 测试案例2:
// 整数位小于3位数
console.log(transformNum2('123.24')); // 123.24
// 不带小数的
console.log(transformNum2('1234567890')); // 1,234,567,890
// 带小数的
console.log(transformNum2('1234567890.123')); // 1,234,567,890.123
// 错误的数字
console.log(transformNum3('fwe')); // fwe

// 方式3: 正则
function transformNum3(num) {
	try {
		num = num.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
	} catch (e) {
		console.log('数字转换错误');
	}
	return num;
}
// 测试案例3:
// 整数位小于3位数
console.log(transformNum3('123.24')); // 123.24
// 不带小数的
console.log(transformNum3('1234567890')); // 1,234,567,890
// 带小数的
console.log(transformNum3('1234567890.123')); // 1,234,567,890.123
// 错误的数字
console.log(transformNum3('fwe')); // fwe
