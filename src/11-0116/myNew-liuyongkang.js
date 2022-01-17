/**
 * @description 手动实现new
 */

/**
 * 实现new
 * @param {*} Clazz         构造函数
 * @param  {...any} args    函数的形参列表
 * @returns 
 */
function myNew(Clazz, ...args) {
    // 1. 创建一个原型继承自构造函数Clazz的原型的this对象
    const _this = Object.create(Clazz.prototype);
    // 2. 将构造函数初始化的属性赋值到this的属性上
    const result = Clazz.call(_this, ...args);
    // 3. 若new的构造函数自己返回引用值，则以自己返回的为主，否则返回创建的this实例
    if ((result != null && typeof result === 'object') || typeof result === 'function') {
        return result;
    } else {
        // 4. 返回this实例
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
}
// 使用原生的new实例化对象
let person1 = new Person('张山');
console.log(person1);               // Person { name: '张山' }
console.log(person1.getName());     // 张山

// 使用自己模拟的_new实例化对象
let person2 = myNew(Person, "李四");
console.log(person2);               // Person { name: '李四' }
console.log(person2.getName());     // 李四
