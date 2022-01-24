


/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */







const isPrime = num => {
  if(Number(String(num)) !== parseInt(num)) return false
  for(let i = 2; i < num; i++) {
    if(num % 2 === 0) return false
  }
  return true
}