/**
 * @description 深拷贝
 * @param val
 */

function deepClone(val) {
  const baseType = ['string', 'number', 'undefined', 'boolean'];
  const type = typeof val;

  if (baseType.includes(type)) return val;
  if (Array.isArray(val)) {
    const arr = [];
    for (let i=0; i < val.length; i++) {
      arr.push(deepClone(val[i]));
    }
    return arr;
  } else if (type === 'object') {
    const obj = {};
    for (const v in val) {
      obj[v] = deepClone(val[v]);
    }
    return obj;
  }
}