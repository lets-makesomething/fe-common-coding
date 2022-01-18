/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */

 function trim(str) {
   const reg = /^\s+|\s+$/g
   return str.replace(reg,'')
}

console.log(trim('  abc  '))
