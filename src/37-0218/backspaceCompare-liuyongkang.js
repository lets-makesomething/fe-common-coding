/**
 * 844. 比较含退格的字符串
  给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

  注意：如果对空文本输入退格字符，文本继续为空。

  

  示例 1：

  输入：s = "ab#c", t = "ad#c"
  输出：true
  解释：s 和 t 都会变成 "ac"。
  示例 2：

  输入：s = "ab##", t = "c#d#"
  输出：true
  解释：s 和 t 都会变成 ""。
  示例 3：

  输入：s = "a#c", t = "b"
  输出：false
  解释：s 会变成 "c"，但 t 仍然是 "b"。
  

  提示：

  1 <= s.length, t.length <= 200
  s 和 t 只含有小写字母以及字符 '#'
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	if (typeof s !== 'string' || typeof t !== 'string')
		throw new Error('参数必须是字符串');
	if (s.length < 1 || t.length < 1 || s.length > 200 || t.length > 200)
		throw new Error('参数长度越界');
	if (!/^[a-z#]+$/g.test(s) || !/^[a-z#]+$/g.test(t))
		throw new Error('参数只能是小写字母或#组成');

	let sArray = [],
		tArray = [];

	for (let str of s) {
		if (str === '#') {
			sArray.length !== 0 && sArray.pop();
		} else {
			sArray.push(str);
		}
	}

	for (let str of t) {
		if (str === '#') {
			tArray.length !== 0 && tArray.pop();
		} else {
			tArray.push(str);
		}
	}

	return sArray.join('') === tArray.join('');
};
// 测试案例
console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a#c', 'd')); // false
