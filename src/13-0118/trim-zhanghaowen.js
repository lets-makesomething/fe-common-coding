/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */

  // 使用es6的trim方法
  function trim(str) {
    return str.trim()
  }
  // function trim(string){
  //   const str = string.replace(/(^\s*)|(\s*$)/g,"")
  //   return str
  // }