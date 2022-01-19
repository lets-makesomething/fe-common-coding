/**
 * @description 手动实现bind方法.
 */

function bind2() {
    let _this = this // 表示当前函数
    let obj = Array.prototype.shift.call(arguments) // 删除传入的参数第一项并返回，即调用对象
    let args = Array.prototype.slice.call(arguments) // 类数组转数组
    function FBOUND() {
        const bindArgs = Array.prototype.slice.call(arguments) // 
        return _this.call(this instanceof FBOUND ? this : obj, ...args.concat(bindArgs))
    }
    // bind返回函数被当成构造函数， 指向原函数，并且可以访问原函数的原型
    FBOUND.prototype = this.prototype
    return FBOUND
}
