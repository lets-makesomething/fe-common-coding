/**
 * @description 手动实现bind方法.
 */

function bind2( callObject ) {
  const that = this
  return function() {
    that.call( callObject, ...arguments )
  }
}

Function.prototype.bind2 = bind2