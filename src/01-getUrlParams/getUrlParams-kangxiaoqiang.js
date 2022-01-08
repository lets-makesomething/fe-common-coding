/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */
/**
 * 
 * @param {*} url 需要解析的 url，如需解析当前页面的url则需要传入 null
 * @param {*} key 需要提取的 key 如不传，则返回结果对象
 * @returns 
 */
function getUrlParams(url, key) {
    if (typeof url !== 'string' && url !== null) return
    let str = decodeURI(url || location.href)
    if (str.indexOf('?') == -1) return
    let obj = {}
    str.substr(str.indexOf('?') + 1).split('&').forEach(x => { obj[x.split('=')[0]] = x.substr(x.indexOf('=') + 1) })
    if (key) return obj[key]
    else return obj
}


console.log(getUrlParams('https://baidu.com?a=1&b=2&c=3'), getUrlParams('https://baidu.com?a=1&b=2&c=3', 'a'), getUrlParams(null, 'a'), getUrlParams(null))
