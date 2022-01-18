/**
 * @description 手动实现new
 */

 function myNew(fn) {
  if (typeof fn !== "function") {
    throw '参数异常，只接收函数'
  }
  const obj = Object.create(fn.prototype)
  const params = Array.prototype.slice.call(arguments, 1)
  const rest = fn.apply(obj,params)
  return typeof rest === "object" ? rest : obj;
 }
