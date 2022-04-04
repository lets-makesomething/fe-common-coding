/**
 * @description 手动实现new
 */

function myNew(...args) {
    let fn = args.shift() // 取出第一个参数，即函数
    let obj = {} // 创建对象
    obj.__proto__ = fn.prototype // 指定原型
    let res = fn.apply(obj, args)// 绑定this，并立即执行
    return res instanceof Object ? res : obj
}
