/**
 * @description 手动实现new
 *
 */

function myNew(con, ...args) {
  console.log(con, "con", ...args);
  let obj = {};
  obj._proto_ = con.prototype;
  let result = con.apply(obj, args);
  return typeof result === "object" ? result : obj;
}
