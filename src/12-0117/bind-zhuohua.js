/**
 * @description 手动实现bind方法.
 */

 function bind2(context) {
    const _this = this;
    if (typeof this !== 'function') {
      throw new Error('需要使用函数调用 bind2 函数')
    }
    const arg = [].slice.call(arguments, 1);

    const F = function() {
      // 判断 new 时 this 的指向
      const F_this = this instanceof F ? this : context;
      const args = arg.concat([].slice.call(arguments))
      return _this.apply(F_this, args)
    }

    // 原型式继承 切断 prototype 的关联
    function FNOP() { }
    FNOP.prototype = _this.prototype;
    F.prototype = new FNOP();

    return F;
 }
