/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */

// 方式1：字符串+数组的方法实现
/**
 * 将英文中每个单词的首字母都变成大写。
 * @param {*} str   字符串
 */
function transferWords1(str) {
	if (!str || typeof str !== 'string') return str;
	// 以空字符分割每个单词
	const wordArray = str.split(' ');
	// 将每个单词的首字符转大写，最后通过空格拼接之后返回
	return wordArray
		.map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
		.join(' ');
}

// 测试案例1
const str1 = 'hello everyOneDay, this is our first question topic.';
console.log('方式1', transferWords1(str1)); // Hello EveryOneDay, This Is Our First Question Topic.

// 方式2：正则
/**
 * 将英文中每个单词的首字母都变成大写。
 * @param {*} str   字符串
 */
function transferWords2(str) {
	if (!str || typeof str !== 'string') return str;
	return str.replace(/\b([\w|']+)\b/g, function (word) {
		return word.slice(0, 1).toUpperCase() + word.slice(1);
	});
}
// 测试案例2
const str2 = 'hello everyOneDay, this is our first question topic.';
console.log('方式2', transferWords2(str2)); // Hello EveryOneDay, This Is Our First Question Topic.
