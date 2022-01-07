/**
 * 获取 url 参数
 * @param {string} key 参数名
 * @returns {string|undefined} key 对应的 value
 */
function getUrlParams(key) {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  const r = window.location.search.substring(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
}
