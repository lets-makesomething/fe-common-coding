/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */

const isPrime = num => {
  if (typeof num !== 'number') {
    throw new TypeError('num must be number')
  }

  const absNum= Math.abs(num)
  if(Number.isNaN(num) || !Number.isInteger(num) || absNum === 1){
    return false
  }

   if(num == 2){
    return true; 
   }else if(num % 2 === 0){
      // 偶数可以直接非质数
    return false
   }

  const n =Math.sqrt(absNum) 
  for(let i = 3; i < n; i+=2) {
    if(num % i === 0){
      return false
    }
  }
  return true
}

console.log(isPrime(1))