
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

export default rgb2hex

/**
 * 拓展
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value
 * rgb 的多种语法
 * 不包含透明度时：
 * rgb(255,0,153) 不带空格
 * rgb(255, 0, 153) 带空格
 * rgb(255, 0, 153.0) 浮点数
 * rgb(100%,0%,60%) 三个百分比，切记，不能数字和百分比混用
 * rgb(100%, 0%, 60%) 三个百分比带空格
 * rgb(255 0 153) 空格替代逗号分隔
 * rgb(255 0 153.4) 空格分隔带浮点数
 * rgb(10% 30% 34%) rgb(10% 30% 34.5%) 空格分隔带百分比
 * 经测试，上述语法都可以正确表示不带透明度的 rgb 颜色
 * 但符合最开始要求的应该只有 前两个
 */

/**
 * 将多种语法的不带透明度的 rgb 颜色字符转换为十六进制的形式
 * @param {string} sRGB 
 * @returns {string}
 */
function rgbs2hex (sRGB) {
  if (typeof sRGB !== 'string') {
    throw new TypeError('sRGB must be string')
  }
  let colorStr = sRGB.slice(4, sRGB.length - 1)
  // 不使用正则判断，而是检测输入字符串去除前面的 'rgb(' 和 末尾的 ')' 之后
  // 剩下的部分是否符合要求：
  /**
   * 255,0,153
   * 255,   0, 153
   * 255, 0, 153.0
   * 9,   10   ,      255
   * '  9,   10   ,      255  '
   * 100%,0%,60%
   * 100% 0% 60%
   * '  100%   0%      60%  '
   * 255 0 153
   * '  255    0      153  '
   * '  255    0      153.3'
   */
  // 分隔：空格和逗号不能混用
  // 数值：自然数小数不能与百分比混用
  function _trans(colorArr) {
    try {
      if (colorArr.length !== 3) {
        return sRGB
      }
      let hexStr
      if (colorArr.every(str => str.includes('%'))) { // 要么都是百分比
        hexStr = colorArr.map(numStr => `0${(Math.floor(numStr.replace('%', '') / 100 * 255)).toString(16)}`.slice(-2)).join('')
        return `#${hexStr}`
      } else if (colorArr.every(str => !str.includes('%'))) { // 要么都不是百分比
        hexStr = colorArr.map(numStr => `0${parseInt(numStr).toString(16)}`.slice(-2)).join('')
        return `#${hexStr}`
      } else {
        // 说明有数字和百分比混用
        return sRGB
      }
    } catch (e) {
      return sRGB
    }
  }

  if (colorStr.includes(',')) { // 逗号分隔
    let colorArr = colorStr.split(',')
    return _trans(colorArr)
  } else { // 空格分隔
    let colorArr = colorStr.split(/(\S*)/).filter(str => str !== '' && str !== ' ')
    return _trans(colorArr)
  }
}

export { rgbs2hex }
