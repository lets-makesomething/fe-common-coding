/**
 * 1047. 删除字符串中的所有相邻重复项
    给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

    在 S 上反复执行重复项删除操作，直到无法继续删除。

    在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

    

    示例：

    输入："abbaca"
    输出："ca"
    解释：
    例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
    

    提示：

    1 <= S.length <= 20000
    S 仅由小写英文字母组成。
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function (s) {
	if (typeof s !== 'string') throw new Error('参数必须是字符串');
	if (s.length < 1 || s.length > 20000) throw new Error('参数长度越界');
	if (!/^[a-z]+$/g.test(s)) throw new Error('参数只能是小写字母组成');

	let i = 0,
		strArr = s.split('');

	while (i < strArr.length - 1) {
		// 相邻是大小写不同的同一个字母
		if (strArr[i] === strArr[i + 1]) {
			// 清空相邻两个字符
			strArr.splice(i, 2);
			// 重置条件
			i = i >= 1 ? i - 1 : 0;
		} else {
			i++;
		}
	}

	return strArr.join('');
};

// 测试例子
console.log(removeDuplicates('abbaca')); // ca
console.log(removeDuplicates('abcdeedcbaf')); // f
console.log(removeDuplicates('abcdefedcba')); // abcdefedcba
// console.log(removeDuplicates('abbaca1')); // 报错
