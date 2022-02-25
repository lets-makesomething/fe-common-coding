/**
 *
 * @param {array} a
 * @param {array} b
 * 判断a数组是否为b的子集
 * eg： [1] 是[1,2]的子集，故返回 true
 */

function isChildSet(a, b) {
	const map = new Map();
	for (let key of a) {
		!map.get(key) && map.set(key, true);
	}
	for (let key of b) {
		map.get(key) && map.delete(key);
	}
	return map.size === 0;
}

// 测试
console.log(isChildSet([1], [1, 2])); // true
console.log(isChildSet([1, 3], [1, 2])); // false
console.log(isChildSet([1, 2, 3], [1, 2, 3])); // true
