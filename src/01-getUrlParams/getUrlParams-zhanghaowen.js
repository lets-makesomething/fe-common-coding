/**
 * @day 1
 * input: https://baidu.com?a=1&b=2&c=3
 * output: getUrlParams('a') => return 1
 */

 function getUrlParams(name) {
    const source = 'https://baidu.com?a=1&b=2&c=3'
    const _str = source.split('?')[1]
    const str = {}
    _str.split('&').forEach(key=>{
        const obj = key.split('=');
        Object.assign(str,{
            [obj[0]]:obj[1]
        })
    })
    console.log(str[name])
    return str[name]
}
getUrlParams('a')
