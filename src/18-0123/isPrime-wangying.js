/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */

const isPrime = num => {
  if (typeof num !== 'number') {
    throw new TypeError('num must be number')
  }

  const absNum= Math.abs(num)
  if(Number.isNaN(num) && !Number.isInteger(num) && absNum <= 3){
    return false
  }

  const n =Math.sqrt(absNum) 
  for(let i = 2; i < n; i++) {
    if(num % i === 0){
      return true
    }
  }
  return false
}

console.log(isPrime(13))