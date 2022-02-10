/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */
//利用闭包，实现函数柯里化
function add (a) {
  let args = [...arguments]  // 等价Array.from(arguments)，记录外层函数的参数
  return (b) => args[0] + b
}

console.log(add(1)(2))
