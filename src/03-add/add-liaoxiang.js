/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */

function add(x, y) {
  // 保存函数的参数个数
  const len = add.length
  if (arguments.length === len) {
    // 如果直接传递了全部参数则直接返回计算结果
    return x + y
  } else {
    // 未传递全部参数的情况
    let data = Array.from(arguments)
    return function(...args) {
      // 拼接当前次调用传递的参数和之前调用传递的参数
      data = data.concat(args)
      // 递归调用add，计算出结果
      return add(...data)
    }
  }
}

console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3