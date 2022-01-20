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

// 代码实现
/**
 * 比较两个版本号的大小
 * @param {*} oldVersion
 * @param {*} newVersion
 * @returns   boolean
 */
const shouldUpdate = (oldVersion, newVersion) => {
	// 1. 两个版本相同，返回 false
	if (oldVersion === newVersion) return false;

	// 2. 两个版本不相同的情况

	// 将两个版本号转换成数字
	oldVersion = Number(oldVersion.split('.').join(''));
	newVersion = Number(newVersion.split('.').join(''));

	// 返回两个版本的比较值
	return newVersion > oldVersion;
};

// 测试案例
console.log(shouldUpdate('0.1.0', '0.2.0')); // true
console.log(shouldUpdate('1.0.0', '1.0.0')); // false
console.log(shouldUpdate('1.0.1', '1.0.2')); // true
console.log(shouldUpdate('1.1.1', '1.0.2')); // false
console.log(shouldUpdate('1.1.1', '2.0.0')); // true
