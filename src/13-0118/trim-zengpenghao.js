/**
 * @description 删除头尾空格符
 * @param {String} str
 * @return {String}
 * @example
 * input: '  abc  '
 * output: 'abc'
 */

function trim(str) {
  if (typeof str !== "string") {
    throw new Error("Argument must be a string");
  }
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
