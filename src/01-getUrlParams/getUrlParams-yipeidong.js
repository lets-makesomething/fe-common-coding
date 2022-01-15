/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

const url = 'https://baidu.com?a=1&b=2&c=3'

function getUrlParams( key ) {
  const params = new Map(url.split('?')[1]    // 获取问好后面部分字符串
    .split('&')                               // 将每组参数拆分
    .map(paramStr => paramStr.split('=')))    // 将每组参数组处理成键值对的形式
  const returnValue = params.get(key)
  return Number(returnValue).toString() === returnValue ? Number(returnValue) : returnValue
}

function getUrlParams2( key ) {
  const paramsStr = url.split('?')[1]    // 获取问好后面部分字符串
  const regExp = new RegExp(`${key}=([^&]*)`)
  const returnValue = paramsStr.match(regExp)?.[1]
  return Number(returnValue).toString() === returnValue ? Number(returnValue) : returnValue
}