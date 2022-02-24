/**
 * @description 手动实现new
 */

/**
 * 实现new
 * @returns   Object    实例对象
 */
function myNew() {
	// 1. 解构出构造函数
	const Clazz = arguments[0];
	// 构造函数不存在抛出错误
	if (!Clazz) throw new Error('You must have a constructor');
	// 2. 解构出构造函数的实参列表
	const args = Array.prototype.slice.call(arguments, 1);

	// 3. 创建一个原型继承自构造函数Clazz的原型的this对象
	const _this = Object.create(Clazz.prototype);
	// 4. 将构造函数初始化的属性赋值到this的属性上
	const result = Clazz.call(_this, ...args);
	// 5. 若new的构造函数自己返回引用值，则以自己返回的为主，否则返回创建的this实例
	if (
		(result != null && typeof result === 'object') ||
		typeof result === 'function'
	) {
		return result;
	} else {
		// 6. 返回this实例
		return _this;
	}
}

// 测试案例
// 声明构造函数 Person
function Person(name) {
	this.name = name;
}
// 在原型上添加一个获取name属性的getName方法
Person.prototype.getName = function () {
	return this.name;
};
// 使用原生的new实例化对象
let person1 = new Person('张山');
console.log(person1); // Person { name: '张山' }
console.log(person1.getName()); // 张山

// 使用自己模拟的_new实例化对象
let person2 = myNew(Person, '李四');
console.log(person2); // Person { name: '李四' }
console.log(person2.getName()); // 李四
