/**
 *
 * @param {*} str
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * input abba
 * output true
 */

// 实现方式1: 字符串比较
/**
 * 检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * @param {*} str   字符串
 * @returns     boolean
 * @description 只有连续有2个一样的字符
 */
function containsRepeatingLetter1(str) {
	// 遍历一个一个比较
	return str.split('').some((item, index) => {
		return item === str[index - 1];
	});
}

// 测试
console.log('方式1', containsRepeatingLetter1('abba')); // true
console.log('方式1', containsRepeatingLetter1('aefc')); // false
console.log('方式1', containsRepeatingLetter1('rattler')); // true
console.log('方式1', containsRepeatingLetter1('AfweAA')); // true
console.log('方式1', containsRepeatingLetter1('AfweAa')); // false
console.log('------------------');

// 实现方式2: 正则实现
/**
 * 检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * @param {*} str   字符串
 * @returns     boolean
 * @description 只有连续有2个一样的字符
 */
function containsRepeatingLetter2(str) {
	return /([a-zA-Z])\1/.test(str);
}

// 测试
console.log('方式2', containsRepeatingLetter2('abba')); // true
console.log('方式2', containsRepeatingLetter2('aefc')); // false
console.log('方式2', containsRepeatingLetter2('rattler')); // true
console.log('方式2', containsRepeatingLetter2('AfweAA')); // true
console.log('方式2', containsRepeatingLetter2('AfweAa')); // false
