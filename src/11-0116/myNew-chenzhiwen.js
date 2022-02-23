/**
 * 手动实现 new
 */
function myNew() {
  // new 操作符做了以下工作
  // 1. 在内存中创建了一个对象
  let obj = Object.create(null)
  // 2. 将新对象内部的 __proto__ 赋值为构造函数的 prototype 属性
  let Constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  // 3. 将构造函数内部的 this 设置为 1 中的新对象（this 指向新对象）
  // 4. 执行构造函数内部的代码（给新对象添加属性）
  let ret = Constructor.apply(obj, arguments)
  // 5. 如果构造函数返回非空对象，则返回该对象，否则返回 this
  return typeof ret === 'object' && ret !== null ? ret : obj
}

/**
 * 使用方法
 * function Student(name, age) {
 *   this.name = name
 *   this.age = age
 * }
 * 
 * let ming = myNew(Student, 'ming', 18)
 */
