/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

 function getUrlParams(url,key) {
    let queryString = url ? url.split('?')[1] : window.location.href.split('?')[1];
    let obj = {};
    if (!queryString) {
        return obj;
    }
    queryString.split("&").forEach(item => {
        obj[item.split("=")[0]] = item.split("=")[1]
    })
    return key?obj[key]:obj;
 }
 let result=getUrlParams('https://baidu.com?a=1&b=2&c=3','a')
 let result2=getUrlParams('https://baidu.com?a=1&b=2&c=3')
 console.log(result,result2)