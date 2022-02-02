/**
 * 
 * @param {*} num 
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
    示例1
    输入：
    65
    输出：
    01000001
 */

function convertToBinary(num) {
  if(!Number.isInteger(num)) throw new TypeError('参数必须为整数')
  const result = []
  const hasValue = []

  let currentBinary = num >> 0
  for(let i = 0; i < 32; i++ ) {
    if((currentBinary >> 1) === currentBinary/2) result.unshift('0')
    else result.unshift('1')

    currentBinary = currentBinary >> 1
  }

  // 去除前导零
  do{
    const hasValue = result.slice(0,8).some(value => value === '1')
    if(hasValue) break
    result.splice(0, 8)
  }while(hasValue)

  return result.join('')
}