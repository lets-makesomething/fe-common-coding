/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */

 function trim(str) {
   // (^\s*) 匹配前面的0个或多个空格
   // (\s*$) 匹配后面的0个或多个空间
   return str.replace(/(^\s*)|(\s*$)/g, '');
 }
