/**
 * @description 深拷贝函数
 * @param {Function} fn
 */

// 方式1: JSON.parse(JSON.stringify());

function deepClone1(origin) {
	return JSON.parse(JSON.stringify(origin));
}
// 深拷贝测试
const origin1 = { a: '1', c: { num: 100 } };
const target1 = deepClone1(origin1);
target1.a = 3;
target1.c.num = 50;

console.log('origin1', origin1); // origin1 { a: '1', c: { num: 100 } }
console.log('target1', target1); // target1 { a: 3, c: { num: 50 } }

// 方式2： for in + 递归拷贝法  注意：map是强引用(内存不会释放)，weakMap是弱引用(内存会释放)
function deepClone2(origin, map = new WeakMap()) {
	// 1. 若已经拷贝过直接返回 (解决对象循环引用问题)
	if (map.get(origin)) return origin;

	// 2. 如果不是对象就不需要拷贝
	if (typeof origin !== 'object' && origin !== null) return origin;

	// 3. 实例化拷贝之后的目标对象(对象或数组)
	const target = new origin.constructor();

	// 4. 记录下已经拷贝过的对象
	map.set(origin, true);

	// 5. 遍历拷贝对象
	for (let prop in origin) {
		// 只拷贝实例上的属性
		if (origin.hasOwnProperty(prop)) {
			// 递归拷贝
			target[prop] = deepClone2(origin[prop], map);
		}
	}
	// 6. 返回拷贝后的对象或数组
	return target;
}
// 深拷贝测试
const origin2 = { a: '1', c: { num: 100 } };
const target2 = deepClone2(origin2);
target2.a = 3;
target2.c.num = 50;

console.log('origin2', origin2); // origin2 { a: '1', c: { num: 100 } }
console.log('target2', target2); // target2 { a: 3, c: { num: 50 } }

// 方式3： Reflect + 递归拷贝法     注意：map是强引用(内存不会释放)，weakMap是弱引用(内存会释放)
function deepClone3(origin, map = new WeakMap()) {
	// 1. 若已经拷贝过直接返回 (解决对象循环引用问题)
	if (map.get(origin)) return origin;

	// 2. 如果不是对象就不需要拷贝
	if (typeof origin !== 'object' && origin !== null) return origin;

	// 3. 实例化拷贝之后的目标对象(对象或数组)
	const target = new origin.constructor();

	// 4. 记录下已经拷贝过的对象
	map.set(origin, true);

	// 5. 返回目标对象自身的属性的数组
	Reflect.ownKeys(origin).forEach((prop) => {
		// 递归拷贝
		target[prop] = deepClone3(origin[prop], map);
	});

	// 6. 返回拷贝后的对象
	return target;
}

// 深拷贝测试
const origin3 = { a: '1', c: { num: 100 } };
const target3 = deepClone3(origin3);
target3.a = 3;
target3.c.num = 50;

console.log('origin3', origin3); // origin3 { a: '1', c: { num: 100 } }
console.log('target3', target3); // target3 { a: 3, c: { num: 50 } }

// 方式4：完整版拷贝法

// 获取对象的类型
const getType = (obj) => Object.prototype.toString.call(obj);

// 判断是否是对象
const isObject = (target) =>
	(typeof target === 'object' || typeof target === 'function') &&
	target !== null;
// 可遍历对象的结果
const canTraverse = {
	'[object Map]': true,
	'[object Set]': true,
	'[object Array]': true,
	'[object Object]': true,
	'[object Arguments]': true,
};
const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

// 处理正则
const handleRegExp = (target) => {
	const { source, flags } = target;
	return new target.constructor(source, flags);
};

// 处理函数
const handleFunc = (func) => {
	// 箭头函数直接返回自身
	if (!func.prototype) return func;
	const bodyReg = /(?<={)(.|\n)+(?=})/m;
	const paramReg = /(?<=\().+(?=\)\s+{)/;
	const funcString = func.toString();
	// 分别匹配 函数参数 和 函数体
	const param = paramReg.exec(funcString);
	const body = bodyReg.exec(funcString);
	if (!body) return null;
	if (param) {
		const paramArr = param[0].split(',');
		return new Function(...paramArr, body[0]);
	} else {
		return new Function(body[0]);
	}
};

// 处理不能遍历的对象
const handleNotTraverse = (target, tag) => {
	const Ctor = target.constructor;
	switch (tag) {
		case boolTag:
			return new Object(Boolean.prototype.valueOf.call(target));
		case numberTag:
			return new Object(Number.prototype.valueOf.call(target));
		case stringTag:
			return new Object(String.prototype.valueOf.call(target));
		case symbolTag:
			return new Object(Symbol.prototype.valueOf.call(target));
		case errorTag:
		case dateTag:
			return new Ctor(target);
		case regexpTag:
			return handleRegExp(target);
		case funcTag:
			return handleFunc(target);
		default:
			return new Ctor(target);
	}
};

const deepClone4 = (target, map = new WeakMap()) => {
	// 不是可遍历的对象直接返回
	if (!isObject(target)) return target;
	// 获取对象的类型
	let type = getType(target);
	// 声明拷贝之后的对象
	let cloneTarget;
	if (!canTraverse[type]) {
		// 处理不能遍历的对象
		return handleNotTraverse(target, type);
	} else {
		// 这波操作相当关键，可以保证对象的原型不丢失！
		cloneTarget = new target.constructor();
	}
	// 若已经拷贝过直接返回 (解决对象循环引用问题)
	if (map.get(target)) return target;

	// 记录下已经拷贝过的对象
	map.set(target, true);

	//处理Map
	if (type === mapTag) {
		target.forEach((item, key) => {
			cloneTarget.set(deepClone4(key, map), deepClone4(item, map));
		});
	}
	//处理Set
	if (type === setTag) {
		target.forEach((item) => {
			cloneTarget.add(deepClone4(item, map));
		});
	}
	// 处理数组和对象
	for (let prop in target) {
		if (target.hasOwnProperty(prop)) {
			cloneTarget[prop] = deepClone4(target[prop], map);
		}
	}
	return cloneTarget;
};

// 深拷贝测试
const origin4 = { a: '1', c: { num: 100 } };
const target4 = deepClone4(origin4);
target4.a = 3;
target4.c.num = 50;

console.log('origin4', origin4); // origin4 { a: '1', c: { num: 100 } }
console.log('target4', target4); // target4 { a: 3, c: { num: 50 } }
