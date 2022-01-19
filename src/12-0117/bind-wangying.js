/**
 * @description 手动实现bind方法.
 */

Function.prototype._bind=function(context) {
  const that = this
  const args = Array.prototype.slice.call(arguments,1)
  function fBind(){
    return that.apply(this instanceof fBind? this:context,[...args,...arguments])
  }
  function Fn(){}
  Fn.prototype = this.prototype
  fBind.prototype = new Fn()
  return fBind
};
