function _cloneFunction( fn ) {
  const funcStr = fn.toString()
  let resultFunc = null
  eval('resultFunc = ' + funcStr)
  Object.defineProperty(resultFunc, 'name', {
    value: fn.name,
    writable: false,
    enumerable: false,
    configurable: true
  })
  return resultFunc
}

function _isCircularReference( stack, obj ) {
  const set = new Set(stack)
  const setSize = set.size
  set.add(obj)
  if(set.size === setSize) return true
  return false
}

function deepClone( obj, stack ) {
  const type = typeof obj
  const isBaseType = type !== 'object' && type !== 'function' || obj === null
  if(isBaseType) return obj

  if(type === 'function') return _cloneFunction(fn)

  if(!stack) stack = []
  if(_isCircularReference( stack, obj)) throw new ReferenceError('循环引用，不可拷贝')
  stack.push(obj)

  const resultObject = Array.isArray(obj) ? [] : {}
  const allKeys = Object.getOwnPropertyNames(obj)
  for(const key of allKeys) {
    resultObject[key] = deepClone(obj[key], stack)
  }
  return resultObject
}