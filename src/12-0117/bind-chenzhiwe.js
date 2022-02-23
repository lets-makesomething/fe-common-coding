/**
 * myBind
 */
function bind2(context) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }

  let self = this
  // 处理 bind2 方法调用时，传递进来的参数—— xxx.bind2(context, x, y, z)
  // 除 context 外的剩下参数，即 x y z 等
  let args = Array.prototype.slice.call(arguments, 1)

  // 用于处理当 bind2 返回的新函数作为构造函数使用
  let fNOP = function () {}

  // 定义 bind2 方法返回的新函数
  let fBound = function () {
    let bindArgs = Array.prototype.slice.call(arguments)
    // 当 bind2 方法返回的新函数用作构造函数时，bind2 的第一个参数 context 会失效——因为 new 的作用下，构造函数内的 this 会指向新生成的对象
    // 因此有：
    // 1. 当作为构造函数时，this 指向实例，下方判断为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 2. 当作为普通函数时，this 指向 window，下方判断为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
  }

  // 修正返回的新函数的原型链，这样实例才能继承绑定函数的原型中的值
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

Function.prototype.bind2 = bind2

/**
 * let foo = {
 *   value: 1
 * }
 * 
 * function bar() {
 *   return this.value
 * }
 * 
 * let bindFoo = bar.bind2(foo)
 * 
 * console.log(bindFoo()) // 1
 */
