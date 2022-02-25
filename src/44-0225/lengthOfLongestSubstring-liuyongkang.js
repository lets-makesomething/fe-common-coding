/**
 * 3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// need use map
	const len = s.length;
	if (len < 1) return len;

	const map = new Map();
	const result = [];

	for (let i = 0; i < len; i++) {
		// 出现重复的子串
		if (map.get(s[i])) {
			result.push(map.size);
			// map.clear();     // 这个有问题，会清空所以数据
			// 删除之前存在的子串数据
			for (let key of map.keys()) {
				map.delete(key);
				if (!map.get(s[i])) break;
			}
		}
		map.set(s[i], true);
	}

	if (map.size !== 0) result.push(map.size);

	return Math.max.apply(null, result);
};

// 测试
console.log(lengthOfLongestSubstring('bbtablud')); // 6
console.log(lengthOfLongestSubstring('dvdf')); // 3
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
