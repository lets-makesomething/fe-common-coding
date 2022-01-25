
/**
 * 
 * @param {*} n 
 * 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 */




function fibonacci(n) {
  if (typeof n !== 'number' || n < 1) {
    return n;
  } else if (n <= 2) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}
