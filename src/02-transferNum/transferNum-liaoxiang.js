/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

function transferNum(num) {
  if (typeof num !== 'number') return
  // 拆分成每一项至多三个数字的数组
  const arr = []
  let numStr = num + ''
  // 计算按,分隔的组数
  const len = Math.ceil(numStr.length / 3)
  // 按至多三个数字一组进行截取并push到数组中
  while(arr.length < len) {
    arr.push(numStr.slice(arr.length * 3, arr.length * 3 + 3))
  }
  // 用,拼接
  return arr.join(',')
}

console.log(transferNum(123456)) // 123,456
console.log(transferNum(12345678)) // 123,456,78
