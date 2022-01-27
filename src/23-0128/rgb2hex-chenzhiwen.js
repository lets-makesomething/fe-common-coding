
/**
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 * @param {string} sRGB rgb 颜色值
 * @returns {string} sRGB 或 hex 颜色值
 * @description rgb 中每个 , 后面的空格数量不固定
 * @description 十六进制表达式使用六位小写字母
 * @description 如果输入不符合 rgb 格式，返回原始输入
 * @description 输入：'rgb(255, 255, 255)' 输出：#ffffff
 */
function rgb2hex(sRGB) {
  // 判断 sRGB 是否符合要求
  if (typeof sRGB !== 'string') {
    throw new TypeError('sRGB must be string')
  }
  let reg = /^rgb\(\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\)$/g
  // 如果输入不符合 rgb 格式，返回原始输入
  if(!reg.test(sRGB)) {
    return sRGB
  }
  // 'rgb(9, 10, 255)' => '9, 10, 255' => ['9', ' 10', ' 255'] => 去空格转数字转 16 进制补零后合并
  let hexStr = sRGB.slice(4, sRGB.length -1).split(',').map(numStr => `0${Number(numStr.trim()).toString(16)}`.slice(-2)).join('')
  return `#${hexStr}`
}
