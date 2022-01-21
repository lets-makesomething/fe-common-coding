/**
 * @description 手动实现new
 */

function myNew() {
  let obj = {};

  Constructor = [].unshift.call(arguments);

  // 改变原型指向
  obj.__proto__ = Constructor.prototype;

  // this 指向 new 生成的对象
  const res = Constructor.call(obj, ...arguments);

  /**
   * 处理返回值
   * 基本数据类型：返回构造函数对象
   * 引用数据类型：返回函数的返回值
   */
  return typeof res === 'object' ? res : obj;
}
