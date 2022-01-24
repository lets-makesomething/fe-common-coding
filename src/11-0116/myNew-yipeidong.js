/**
 * @description 手动实现new
 */

function myNew( constructor, ...params ) {
  const obj = Object.create( constructor.prototype )
  const result = constructor.call( obj, ...params)
  return obj
}