/**
 * 柯里化加法函数，只传入一个参数时会惰性计算，等待传入第二个参数或对返回的方法传入第二个参数后再执行
 */
 function add() {
  if (arguments.length > 1) {
    return Array.prototype.reduce.call(arguments, (total, current) => total + current)
  } else {
    let args = arguments[0]
    return function () {
      return args + arguments[0]
    }
  }
}

export default add
