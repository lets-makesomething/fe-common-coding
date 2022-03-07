/**
 * 判断一个字符串是不是回文
 * input: dad
 * output: true
 */

// 使用数组的 api
function isPalindrome(str) {
	if (typeof str !== 'string') return false;
	return str.split('').reverse().join('') === str;
}
// 测试案例
console.log(isPalindrome('dad')); // true
console.log(isPalindrome('abcdcba')); // true
console.log(isPalindrome('abcdecba')); // false

// 不使用数组的 api
function isPalindrome1(str) {
	if (typeof str !== 'string') return false;

	let i = 0,
		j = str.length - 1;
	while (i < j) {
		if (str.charAt(i) !== str.charAt(j)) return false;
		i++;
		j--;
	}
	return true;
}

console.log(isPalindrome1('dad')); // true
console.log(isPalindrome1('abcdcba')); // true
console.log(isPalindrome1('abcdecba')); // false
