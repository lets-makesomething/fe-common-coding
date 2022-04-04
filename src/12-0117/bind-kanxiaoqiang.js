/**
 * @description 手动实现bind方法.
 */

Function.prototype.myBind = Function.prototype.bind || function (context) {
    //确保调用bind方法的一定要是一个函数
    if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var args = Array.prototype.slice.call(arguments, 1);
    var self = this;
    var F = function () { };
    F.prototype = this.prototype;
    var bound = function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return self.apply(this instanceof F ? this : context || this, finalArgs);
    }
    bound.prototype = new F();
    return bound;
}
//测试
function a() {
    return this.name;
}
let s = a();    //''
var b = { name: 'kong' };

let s1 = a.bind(b)();    //kong

let s2 = a.myBind(b)();
console.log(s, s1, s2)