/**
 * @description 手动实现bind方法.
 */

Function.prototype.bind2 = function () {
	// 1. 不是函数直接抛出错误
	if (typeof this !== 'function') {
		throw new TypeError('被绑定的对象需要是函数');
	}

	// 2. 保存上下文对象和函数以及函数的参数列表
	const self = this;
	const oThis = arguments[0];
	let args = Array.prototype.slice.call(arguments, 1);

	// 3. 创建一个函数用来维护原型对象
	const func = function () {};

	// 4. 返回一个新的函数(也就是对oThis处理过的函数)
	fBound = function () {
		// instanceof用来检测某个实例对象的原型链上是否存在这个构造函数的prototype属性
		// this instanceof func === true时, 说明返回的fBound被当做new的构造函数调用，此时this = fBound(){ }，
		// 否则this = window, 如果是的话使用新创建的this代替硬绑定的this
		const This = this instanceof func ? this : oThis;

		// 合并参数
		args = args.concat(Array.prototype.slice.call(arguments));
		return self.apply(This, args);
	};

	// 5. 维护原型关系
	if (this.prototype) {
		func.prototype = this.prototype;
	}

	// 6. 使fBound.prototype是func的实例，返回的fBound若作为new的构造函数，新对象的__proto__就是func的实例
	fBound.prototype = new func();
	return fBound;
};

// 测试案例
function eat(name, food) {
	console.log(`${name || this.name}吃${food || this.food}`);
}
const obj = { name: '我', food: '橘子' };

// 原生bind函数测试
// const objEat = eat.bind(obj);
// objEat(); // 我吃橘子
// objEat('她', '芒果'); // 她吃芒果

// 自己写的bind函数测试
const objEat2 = eat.bind2(obj);
objEat2(); // 我吃橘子
objEat2('她', '西瓜'); // 她吃西瓜
