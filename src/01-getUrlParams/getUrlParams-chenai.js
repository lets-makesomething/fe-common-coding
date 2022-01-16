/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */
// 第一种
function getUrlParams1(key, url) {
    if (typeof key !== 'string') return
    // 获取查询字符串
    const urlSearch = url ? url.split('?')[1] : window.location.search;
    // URLSearchParams 返回一个 URLSearchParams 对象
    // Object.fromEntries // 键值对列表转换为一个对象
    const obj = Object.fromEntries(new URLSearchParams(urlSearch));
    return obj[key];
}
// 第二种
function getUrlParams2(key, url) {
    if (typeof url !== 'string' || typeof key !== 'string') return
    const params = {}
    const index = url.indexOf('?')
    const urlSearch = url || window.location.search;
    if (index > -1) {
        // 获取查询字符串
        const searchStr = urlSearch.split('?')[1]
        const strsArr = searchStr.split("&");
        strsArr.forEach(item => {
            let [key, value] = item.split('=')
            params[key] = value
        })
    }
    return params[key]
}
console.log(getUrlParams1('a', 'https://baidu.com?a=1&b=2&c=3')) // 1
console.log(getUrlParams2('a', 'https://baidu.com?a=1&b=2&c=3')) // 1
export default getUrlParams1
