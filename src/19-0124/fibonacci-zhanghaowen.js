/**
 *
 * @param {*} n
 * 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 */

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
