/**
 * @description 手动实现bind方法.
 */

Function.prototype.mybind3 = function () {
  let args = Array.from(arguments);
  let thisArg = args.shift();
  let thisFunc = this;
  // 因为需要构造函数，所以不能是匿名函数了
  let fBind = function () {
    newArgs = args.concat(Array.from(arguments));
    thisArg = this instanceof fBind ? this : thisArg;
    return thisFunc.apply(thisArg, newArgs);
  };
  fBind.prototype = Object.create(this.prototype);
  return fBind;
};
