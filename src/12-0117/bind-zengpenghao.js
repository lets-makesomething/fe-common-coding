/**
 * @description 手动实现bind方法.
 */

 function bind2(context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  const self = this;
  const args = Array.prototype.slice.call(arguments);
  const F = function () {};
  const bound = function () {
    const bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this.constructor === self ? this : context, args.concat(bindArgs));
  }

  F.prototype = self.prototype;
  bound.prototype = new F();
  return bound;
 }
