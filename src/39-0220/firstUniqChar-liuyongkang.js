/**
 * 387. 字符串中的第一个唯一字符
  给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

  

  示例 1：

  输入: s = "leetcode"
  输出: 0
  示例 2:

  输入: s = "loveleetcode"
  输出: 2
  示例 3:

  输入: s = "aabb"
  输出: -1
  

  提示:

  1 <= s.length <= 105
  s 只包含小写字母
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const map = new Map();
	const len = s.length;

	for (let i = 0; i < len; i++) {
		const char = s[i];
		map.set(char, map.get(char) !== undefined ? -1 : i);
	}

	let findCharIndex = -1;
	for (let index of map.values()) {
		if (index !== -1) {
			findCharIndex = index;
			break;
		}
	}

	return findCharIndex;
};

// 测试
console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
console.log(firstUniqChar('dddccdbba')); // 8
