/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */
function trim(str) {
  if (typeof str !== 'string') {
    throw new TypeError('只接受字符串')
  }
  if (String.prototype.trim) {
    return str.trim()
  } else {
    // ^ 开头
    // \s 匹配所有空白符 (\f 换页 \n 换行符 \r 回车符 \t 制表符 \v 垂直制表符)
    // \uFEFF 在 Unicode3.2 之前表示 零宽不换行空格；在 Unicode3.2 之后只表示 字节次序标记，\u2060 表示 零宽不断空白
    // ES5 规定，String.prototype.trim 需要去掉字符串两端的 WhiteSpace 和 LineTerminator
    // \uFEFF 属于 ES5 新增的 WhiteSpace，应该被 trim 掉
    // \xA0 是 不间断空白符，是 latin1（ISO/IEC_8859-1）中的拓展字符集字符，代表空白符
    // 我们常用的空格是 \x20，是标准 ASCII 可见字符 0x20~0x7e 范围内
    // core-js 中 whitespace 的定义
    // \u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF
    // + 若干 >= 1
    // $ 结尾
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  }
}
