
/**
 * 
 * @param {array} a 
 * @param {array} b 
 * 求两个数组的交集和并集
 */

const union = (a,b)=>{
  const result = a.concat(b.filter(v => !a.includes(v)))
  return result;
}

const intersect = (a,b)=>{
  const result = [];
  const set = new Set();

  for(let i = 0, len = a.length; i < len; i++) {
    set.add(a[i]);
  }

  for(let j = 0, len = b.length; j < len; j++) {
    if (set.has(b[j])) {
      result.push(b[j]);
    }
  }

  return result;
}