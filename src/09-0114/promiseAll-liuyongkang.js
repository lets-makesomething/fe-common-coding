/**
 * @param {*} promises
 * @description 实现Promise.all方法
 * @example
 * input: Array<Promise>
 * output: Promise
 */

/**
 * 概念: 多个 Promise 任务同时执行，如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。
 * 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。
 * 原理：遍历promise数组，依次存取每个promise返回的结果，只要一个失败态就直接返回，否则全部执行完成才依此返回数组结果
 * 注意：
 * 1. 只要一个promise执行结果是失败态就直接返回,返回的是一个失败态的promise
 * 2. 如果全部执行完成，返回的是一个成功态的promise，promise的结果是按照数组的顺序返回的
 * @param {*} promises  promise数组
 * @return {Promise}    返回的是一个promise
 */
function promiseAll(promises) {
	// 1. 不是数组直接抛出错误
	if (!Array.isArray(promises))
		throw new TypeError(
			`${typeof promises} 241242 is not iterable (cannot read property Symbol(Symbol.iterator))`
		);

	// 2. 定义变量存取数组长度
	const len = promises.length;

	// 3. 定义辅助变量和函数
	// 3.1 存取promises数组返回结果的数组集，长度为promises的长度
	const result = new Array(len);

	// 3.2 记录执行完promise的个数
	let index = 0;

	// 3.3. 定义一个预置函数
	// 函数执行len次就执行回调函数
	const beforeDone = (i, data, callback) => {
		// 3.3.1 依此保存promise的执行结果
		result[i] = data;
		// 3.3.2 等全部遍历完成，才把最终的结果返回出去
		if (++index === len) callback(result);
	};

	// 4. 返回的是一个promise函数
	return new Promise(function (resolve, reject) {
		// 4.1 遍历所有promise，然后依次执行
		for (let i = 0; i < len; i++) {
			// 4.2 为什么使用try,catch,可能用户自己实现了一个类似promise结构的对象，然后抛出错误
			try {
				// 4.3 为什么使用：Promise.resolve   因为传入的数组每项可能是常量，不是promise
				Promise.resolve(promises[i]).then(
					(data) => beforeDone(i, data, (result) => resolve(result)), // 成功回调执行预置函数，等全部执行完成才返回
					(error) => reject(error) // 失败回调返回rejected失败态的结果
				);
			} catch (e) {
				reject(e); // 执行错误返回rejected失败态的结果
			}
		}
	});
}

// 测试案例:
// 定义测试用的promise
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result1');
	}, Math.ceil(Math.random() * 100));
});
const promise2 = new Promise((resolve, reject) => {
	resolve('result2');
});
const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('error3');
	}, Math.ceil(Math.random() * 100));
});
// const promise4 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		throw new Error('错误哦');
// 	}, Math.ceil(Math.random() * 100));
// });

// 1. 测试常量promise
promiseAll([1, 2]).then(
	(data) => console.log('data1', data),
	(error) => console.log('error1', error)
);
// data1 [1, 2]

// 2. 测试两个promise
promiseAll([promise1, promise2]).then(
	(data) => console.log('data2', data),
	(error) => console.log('error2', error)
);
// 结果是依此返回，不会因为异步问题导致返回结果的顺序不一样
//  data2 [ 'result1', 'result2' ]

// 3. 测试一个promise为rejecte的
promiseAll([promise1, promise2, promise3]).then(
	(data) => console.log('data3', data),
	(error) => console.log('error3', error)
);
// error3 error3

// Promise.all([promise1, promise2]).then(
// 	(data) => console.log('data', data),
// 	(error) => console.log('error', error)
// );
