/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */

function trim(str) {
    return str.replace(/(^[ ]{1,}|[ ]{1,}$)/g, '')
}
