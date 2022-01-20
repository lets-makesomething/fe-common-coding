/**
 * 
 * @param {*} oldVersion 
 * @param {*} newVersion 
 * 请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
注意：
1. 版本号格式均为"X.X.X"
2. X∈[0,9]
3. 当两个版本号相同时，不需要更新
 */

// 方式1: 转换成Number比较
/**
 * 比较两个版本号的大小
 * @param {*} oldVersion
 * @param {*} newVersion
 * @returns   boolean
 */
const shouldUpdate1 = (oldVersion, newVersion) => {
	// 1. 两个版本相同，返回 false
	if (oldVersion === newVersion) return false;

	// 2. 两个版本不相同的情况

	// 将两个版本号转换成数字
	oldVersion = Number(oldVersion.split('.').join(''));
	newVersion = Number(newVersion.split('.').join(''));

	// 返回两个版本的比较值
	return newVersion > oldVersion;
};
// 测试案例1
console.log('方式1', shouldUpdate1('0.1.0', '0.2.0')); // true
console.log('方式1', shouldUpdate1('1.0.0', '1.0.0')); // false
console.log('方式1', shouldUpdate1('1.0.1', '1.0.2')); // true
console.log('方式1', shouldUpdate1('1.1.1', '1.0.2')); // false
console.log('方式1', shouldUpdate1('1.1.1', '2.0.0')); // true

// 方式2：数组的sort方法
/**
 * 比较两个版本号的大小
 * @param {*} oldVersion
 * @param {*} newVersion
 * @returns   boolean
 */
const shouldUpdate2 = (oldVersion, newVersion) => {
	// 1. 两个版本相同，返回 false
	if (oldVersion === newVersion) return false;

	// 2. 两个版本不相同的情况
	// 利用数组的排序方法排序(默认升序)，并且取第一个和新版本比较
	return [newVersion, oldVersion].sort()[0] !== newVersion;
};

// 测试案例2
console.log('方式2', shouldUpdate2('0.1.0', '0.2.0')); // true
console.log('方式2', shouldUpdate2('1.0.0', '1.0.0')); // false
console.log('方式2', shouldUpdate2('1.0.1', '1.0.2')); // true
console.log('方式2', shouldUpdate2('1.1.1', '1.0.2')); // false
console.log('方式2', shouldUpdate2('1.1.1', '2.0.0')); // true
