


/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */

const isPrime = num => {
  if (num <= 3) {
    return num > 1;
  } else {
    let n = Math.sqrt(num);
    for (let i = 2; i <= n; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}