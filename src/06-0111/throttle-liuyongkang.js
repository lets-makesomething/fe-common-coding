/**
 * @description 节流函数
 * @param {Function} fn
 */

// 方式1: 时间戳版
// 1) 原理：当持续触发事件时，在规定时间段内只能调用一次回调函数。如果在规定时间内又触发了该事件，则什么也不做,也不会重置定时器.
/**
 * 函数节流：时间戳版
 * @param {*} fun       需要节流的函数
 * @param {*} delay     延迟时间    默认延迟500ms
 * @returns             返回一个被节流函数处理过的函数
 */
function throttle1(fun, delay = 500) {
	// 1. 记录上一次触发的时间戳.这里初始设为0,是为了确保第一次触发产生回调
	let previous = 0;

	// 2. 返回闭包函数
	return function (args) {
		// 2.1 记录此刻触发时的时间戳
		const now = Date.now();

		// 2.2 保存函数的参数(一般就是事件返回的对象)和上下文
		const that = this;
		const _args = args;

		// 2.3 如果时间差大于规定时间,则触发回调，并且重置上一次触发的时间戳
		if (now - previous > delay) {
			// 触发回调函数
			fun.apply(that, _args);
			// 重置上次触发的时间戳
			previous = now;
		}
	};
}

// 方式2: 定时器版
// 1) 原理：当持续触发事件时，在规定时间段内只能调用一次回调函数。如果在规定时间内又触发了该事件，则什么也不做,也不会重置定时器.
/**
 * 函数节流：定时器版
 * @param {*} fun       需要节流的函数
 * @param {*} delay     延迟时间    默认延迟500ms
 * @returns             返回一个被节流函数处理过的函数
 */
function throttle2(fun, delay = 500) {
	// 1. 保存定时器标识
	// let timer;

	// 2. 返回闭包函数
	return function (args) {
		// 2.1 保存函数的参数(一般就是事件返回的对象)和上下文
		const that = this;
		const _args = args;

		// 2.2 如果定时器不存在,则设置新的定时器
		if (!fun.timer) {
			fun.timer = setTimeout(function () {
				// 延时时间到了就清空定时器，并且执行回调
				fun.timer = null;
				fun.apply(that, _args);
			}, delay);
		}
	};
}

// 方式3:   时间戳+定时器版
// 实现第一次触发可以立即响应,结束触发后也能有响应
// 该版主体思路还是时间戳版,定时器的作用仅仅是执行最后一次回调
/**
 * 函数节流：定时器版
 * @param {*} fun       需要节流的函数
 * @param {*} delay     延迟时间    默认延迟500ms
 * @returns             返回一个被节流函数处理过的函数
 */
function throttle3(fun, delay = 500) {
	// 1. 保存定时器标识和上次触发的时间戳
	let timer = null;
	let previous = 0;

	// 2. 返回闭包函数
	return function (args) {
		// 2.1 当前触发的时间戳
		let now = Date.now();
		// 2.2 距离规定时间,还剩多少时间
		let remaining = delay - (now - previous);
		// 2.3 保存函数的参数(一般就是事件返回的对象)和上下文
		let that = this;
		let _args = args;
		// 2.4 清除之前设置的定时器
		clearTimeout(timer);
		// 2.5 第一次的间隔时间是delay-now，所以肯定满足条件
		// 后面previous会重置上一次的间隔时间，所以就是delay-now-previous
		if (remaining <= 0) {
			fun.apply(that, _args);
			previous = Date.now();
		} else {
			// 2.6 因为上面添加的clearTimeout.实际这个定时器只有最后一次才会执行
			timer = setTimeout(function () {
				fun.apply(that, _args);
			}, remaining);
		}
	};
}
