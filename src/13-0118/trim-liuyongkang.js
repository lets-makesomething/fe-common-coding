/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */

/**
 * 删除头尾空格符
 * @param {*} str 需要替换的字符串
 * @returns string
 */
function trim(str) {
	// 不是字符串直接返回
	if (typeof str !== 'string') return str;

	// 全局替换头尾的空格
	return str.replace(/(^\s*)|(\s*$)/g, '');
}
// 测试
console.log(trim(100)); // 100
console.log(trim('   a b c   ')); // a b c
