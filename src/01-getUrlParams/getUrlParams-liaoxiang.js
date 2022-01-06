/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

function getUrlParams(url, key) {
  // 校验参数
  if (typeof url !== 'string') return
  // 截取参数部分的字符
  let paramsStr = url.split('?')[1]
  // 没有传递参数直接return
  if (!paramsStr) return
  // 定义一个对象用来保存参数的key->value的对应形式
  const paramsMap = {}
  if (paramsStr.indexOf('&') > -1) {
    // 存在多个参数的情况
    const arr = paramsStr.split('&')
    arr.forEach((item) => {
      const temp = item.split('=')
      // 保存到paramsMap中
      paramsMap[temp[0]] = temp[1]
    })
  } else {
    // 只有一个参数的情况
    const arr = paramsStr.split('=')
    // 保存到paramsMap中
    paramsMap[arr[0]] = arr[1]
  }
  // 返回对应参数的值
  return paramsMap[key]
}

console.log(getUrlParams('https://baidu.com?a=1&b=2&c=3', 'a')) // 1
