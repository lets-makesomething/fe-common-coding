/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

function transformNum(num) {
	// 不存在直接返回
	if (!num) return num;
	// 通过.分割整数和小数
	num = String(num).split('.');
	// 使用正则处理整数部分(每3位加一个,)
	num[0] = num[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,');
	// 拼接整数和小数部分，并返回
	return num.join('.');
}
console.log(transformNum('1234567890')); // 1,234,567,890
console.log(transformNum('1234567890.123')); // 1,234,567,890.123
