


/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */







const isPrime = num => {
  // 质数只能被1和自身整除
  for(let i = 2; i < num; i++) {
    // 能被其他数整除的就不是质数
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5))