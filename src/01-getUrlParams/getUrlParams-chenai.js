/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */
function getUrlParams(url, key) {
    if (typeof url !== 'string' || typeof key !== 'string') return
    const params = {}
    if (url.split('?').length > 1) {
        url.split('?')[1].split('&').forEach(item => {
            let [key, value] = item.split('=')
            params[key] = value
        })
    }
    return params[key]
}
export default getUrlParams