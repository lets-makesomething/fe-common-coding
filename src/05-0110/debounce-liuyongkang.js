/**
 * @description 函数防抖
 */

// 方式1: 非立即执行版
// 1) 原理：维护一个计时器，规定在delay时间后触发函数，如果在delay时间内再次触发的话，就会取消之前的计时器而重新设置。 这样一来，只有最后一次操作能被触发
/**
 * 函数防抖：非立即执行版本
 * @param {*} fun       需要防抖的函数
 * @param {*} delay     延迟时间    默认延迟500ms
 * @returns             返回一个被防抖函数处理过的函数
 */
function debounce1(fun, delay = 500) {
	// 1. 保存定时器标识 定义一个变量来保存定时器标识
	// let timer = null;

	// 2. 返回闭包函数
	return function () {
		// 2.1 保存函数的参数(一般就是事件返回的对象)和上下文
		const that = this;
		const args = arguments;

		// 2.2 对定时器的判断清除;
		clearTimeout(fun.timer);

		// 1. 保存在函数(函数也是对象)的属性上

		// 3. 重新设置定时器,并将回调函数放入其中
		fun.timer = setTimeout(function () {
			// 这里的this指向的是window，要使用call方法改变this的指向，或者使用箭头函数指向外部函数也行
			fun.call(that, args);
		}, delay);
		// fun.timer = setTimeout(() => fun.call(this, args), delay);
	};
}

// 方式2: 立即执行版
// 原理：思路和上面的大致相同,如果是立即执行,则定时器中不再包含回调函数,而是在回调函数执行后,仅起到延时和重置定时器标识的作用
/**
 * 函数防抖：立即执行版本
 * @param {*} fun       需要防抖的函数
 * @param {*} delay     延迟时间    默认延迟500ms
 * @param {*} immediate 是否立即执行    默认false,和非立即执行版本一样的功能    true: 第一次执行，后面如果点击的间隔在delay时间内不会执行，否则执行
 * @returns             返回一个被防抖函数处理过的函数
 */
function debounce2(fun, delay = 500, immediate = false) {
	// 1. 保存定时器标识
	let timer = null;
	// 2. 返回闭包函数
	return function () {
		// 2.1  保存函数的参数(一般就是事件返回的对象)和上下文
		const that = this;
		const args = arguments;
		// 2.2  对定时器的判断清除,不管是否立即执行都需要首先清空定时器
		clearTimeout(timer);
		// 3.1 是否立即执行
		if (immediate) {
			// 3.1.1 如果定时器不存在,则说明延时已过,可以立即执行函数
			if (!timer) fun.apply(that, args);
			// 3.1.2 不管上一个延时是否完成,都需要重置定时器
			timer = setTimeout(function () {
				timer = null;
			}, delay);
		}
		// 3.2 不是立即执行 (和非立即执行的版本一样)
		else {
			// 如果是非立即执行版,则重新设定定时器,并将回调函数放入其中
			timer = setTimeout(function () {
				fun.call(that, args);
			}, delay);
		}
	};
}
