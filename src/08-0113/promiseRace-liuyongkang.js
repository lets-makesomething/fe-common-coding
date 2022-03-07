/**
 *
 * @param {array} promises
 * @description 实现Promise.race方法
 * @example
 * input: Array<Promise>
 * output: Promise
 *
 */

/**
 * 原理：遍历promise数组，谁先执行完，就先返回谁（取第一名的成绩）
 * 利用promise的特性:
 * 状态只能  peeding => resolved(成功态)  peeding => rejected(失败态)，一经改变，就不能再切换成其他状态了
 * @param {*} promises  promise数组
 * @return {Promise}
 */
function promiseRace(promises) {
	// 1. 不是数组直接抛出错误
	if (!Array.isArray(promises))
		throw new TypeError(
			`${typeof promises} is not iterable (cannot read property Symbol(Symbol.iterator))`
		);

	// 2. 是数组才执行遍历promise操作
	return new Promise(function (resolve, reject) {
		// 2.1 遍历所有promise，然后依次执行，谁先执行完就返回谁
		// 2.2 利用promise的状态只能通过peeding改为resolved和rejected的状态
		for (let promise of promises) {
			// 2.3 为什么使用try,catch,可能用户自己实现了一个类似promise结构的对象，然后抛出错误
			try {
				// 2.4 为什么使用：Promise.resolve   因为传入的数组每项可能是常量，不是promise
				Promise.resolve(promise).then(
					(data) => resolve(data), // 转换成成功态
					(error) => reject(error) // 转换成失败态
				);
			} catch (e) {
				reject(e);
			}
		}
	});
}
// 测试案例
// 定义两个promise，模拟接口返回后调用resolve
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(111);
	}, Math.ceil(Math.random() * 100));
});
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2222);
	}, Math.ceil(Math.random() * 100));
});

// 1. 测试不是数组
// promiseRace('23242');
// string 241242 is not iterable (cannot read property Symbol(Symbol.iterator))
// 2. 测试常量数组
promiseRace([1, 2]).then(
	(data) => {
		console.log('result1:', data);
	},
	(error) => {
		console.log('error1:', error);
	}
);
// result1: 1
// 3. 测试promise数组
promiseRace([promise1, promise2]).then(
	(data) => {
		console.log('result2:', data);
	},
	(error) => {
		console.log('error2:', error);
	}
);
// result2: 111/222 (看谁先返回了)

// 官方的promise.race测试案例
// 定义两个promise，模拟接口返回后调用resolve
// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(111);
// 	}, Math.ceil(Math.random() * 100));
// });
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(2222);
// 	}, Math.ceil(Math.random() * 100));
// });
// // 1. 测试不是数组
// Promise.race(241242);
// // 报错
// // 2. 测试常量数组
// Promise.race([1, 2]).then(
// 	(data) => {
// 		console.log('result1:', data);
// 	},
// 	(error) => {
// 		console.log('error1:', error);
// 	}
// );
// // result1: 1
// // 3. 测试promise数组
// Promise.race([promise1, promise2]).then(
// 	(data) => {
// 		console.log('result2:', data);
// 	},
// 	(error) => {
// 		console.log('error2:', error);
// 	}
// );
// result2: 111/222 (看谁先返回了)
