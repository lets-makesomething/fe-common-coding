/**
 * @description 手动实现new
 */

function myNew(){
  const obj = {};
  const constructor = Array.prototype.shift.call(arguments);
  Object.setPrototypeOf(obj, constructor.prototype);
  const res = constructor.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}
