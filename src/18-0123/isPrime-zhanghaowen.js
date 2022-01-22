/**
 * 判断传入的数字是否为一个质数，是则返回true，否则返回false。
 */

const isPrime = (num) => {
  if (num <= 1) {
    return "输入不合法";
  }
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
