/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */
// first way
function getUrlParams (n, url) {
  let arr = url.split('?')[1].split('&')
  let obj = {}
  arr.forEach(item => {
    obj[item.split('=')[0]] = item.split('=')[1]
  })
  return obj[n]
}
// second way ：RegExp
function getUrlParams (n, url) {
  let obj = {}
  let reg = /([^?&+#]+)=([^?&+#]+)/g;
  url.replace(reg, ($0, $1, $2) => obj[$1] = $2)
  return obj[n]
}

console.log(getUrlParams(a, 'https://baidu.com?a=1&b=2&c=3'))