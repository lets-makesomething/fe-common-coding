/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

// 方式1: 使用字符串分割
function getUrlParams1(url, name) {
	// 1. url不存在或者url不是一个正常的url，返回空
	if (!url || !url.includes('?')) return '';
	// 1. 以?分割，并且拿?后面的数据
	const [preUrl, nextUrl] = url.split('?');
	// 2. ? 后面没有数据直接返回
	if (!nextUrl) return '';
	// 3. 以&分割，拿到url每个参数的字符串
	const paramArr = nextUrl.split('&');
	// 4. 遍历找到对应的参数，并且返回参数值
	const val = paramArr.reduce((result, next) => {
		const [key, val] = next.split('=');
		key === name && (result = val);
		return result;
	}, '');
	return val;
}
// 测试例子
var url = 'https://baidu.com?a=1&b=2&c=3'; // 带?和&的url
var url1 = 'https://baidu.com?a=1'; // 只带?的url
console.log(getUrlParams1(url, 'a')); // 1
console.log(getUrlParams1(url1, 'a')); // 1

// 方式2: 使用正则
function getUrlParams2(url, name) {
	// 1. url不存在或者url不是一个正常的url，返回空
	if (!url || !url.includes('?')) return '';
	// 2. 通过正则匹配参数的值
	const reg = new RegExp('(^|&?)' + name + '=([^&]*)(&|$)', 'i');
	const r = url.substr(1).match(reg);
	// 3. 找到了直接返回
	if (r != null) return unescape(r[2]);
	// 4. 没找到返回空
	return '';
}

// 测试例子
var url = 'https://baidu.com?a=1&b=2&c=3'; // 带?和&的url
var url1 = 'https://baidu.com?a=1'; // 只带?的url
console.log(getUrlParams2(url, 'a')); // 1
console.log(getUrlParams2(url1, 'a')); // 1
