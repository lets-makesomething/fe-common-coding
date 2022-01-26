/**
 *
 * @param {*} str
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * input abba
 * output true
 */

/**
 * 检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * @param {*} str   字符串
 * @returns     boolean
 * @description 只有连续有2个一样的字符
 */
function containsRepeatingLetter(str) {
	return /([a-zA-Z])\1/.test(str);
}

// 测试
console.log(containsRepeatingLetter('abba')); // true
console.log(containsRepeatingLetter('aefc')); // false
console.log(containsRepeatingLetter('rattler')); // true
console.log(containsRepeatingLetter('AfweAA')); // true
console.log(containsRepeatingLetter('AfweAa')); // true
