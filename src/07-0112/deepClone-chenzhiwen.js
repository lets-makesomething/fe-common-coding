/**
 * 深拷贝
 * @param {Object} obj 待拷贝对象
 * @param {Object|null} parent 循环引用的父级
 * @returns 
 */
function deepClone(obj, parent = null) {
  let result = {}
  let keys = Object.keys(obj)
  let key = null
  let temp = null
  let _parent = parent

  while (_parent) {
    if (_parent.originalParent === obj) {
      return _parent.currentParent
    }
    _parent = _parent.parent
  }
  
  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    temp = obj[key]
    if (temp && typeof temp === 'object') {
      result[key] = deepClone(temp, {
        originalParent: obj,
        currentParent: result,
        parent: parent
      })
    } else {
      result[key] = temp
    }
  }
  return result
}
