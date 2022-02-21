/**
 * 
 * @param {array} a 
 * @param {array} b 
 * 判断a数组是否为b的子集
 * eg： [1] 是[1,2]的子集，故返回 true
 */

function isChildSet(a,b){
  const set = new Set();
  
  b.forEach(item => {
    set.add(item);
  })

  for(let i = 0, len = a.length; i < len; i++) {
    if (!set.has(a[i])) {
      return false;
    }
  }

  return true;
}