
/**
 * 
 * @param {array} a 
 * @param {array} b 
 * 求两个数组的交集和并集
 */

const union = (a,b)=>{
  const set =  new Set([...a, ...b])
  return [...set]
}

const intersect = (a,b)=>{
  const set = new Set([...a].filter(v => b.includes(v)))
  return [...set]
}