/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */
function getUrlParams(urlString,param) {
  let paramsStr = urlString.split('?')[1]
  // 如果参数存在才可以去获取参数对应值
  if (paramsStr) {
    const paramsMap={}
    paramsStr.split("&").forEach(item=>{
      paramsMap[item.split("=")[0]]=item.split("=")[1];
    })
    return paramsMap[param]
  }
}
console.log(getUrlParams('https://baidu.com?a=1&b=2&c=3','a'))
