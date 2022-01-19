/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */

/**
 * 将英文中每个单词的首字母都变成大写。
 * @param {*} str   字符串
 */

// 方式：字符串+数组的方法实现
function transferWords(str) {
	if (!str || typeof str !== 'string') return str;
	// 以空字符分割每个单词
	const wordArray = str.split(' ');
	// 将每个单词的首字符转大写，最后通过空格拼接之后返回
	return wordArray
		.map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
		.join(' ');
}

// 测试案例
const str = 'hello everyone, this is our first question topic.';
console.log(transferWords(str)); // Hello Everyone, This Is Our First Question Topic.
