
/**
 * 
 * @param {*} sRGB 
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
    1. rgb 中每个 , 后面的空格数量不固定
    2. 十六进制表达式使用六位小写字母
    3. 如果输入不符合 rgb 格式，返回原始输入
    输入：
    'rgb(255, 255, 255)'

    输出：
    #ffffff
 */


function rgb2hex(sRGB) {
  const regExp = /rgb\(([0-9 ]*),([0-9 ]*),([0-9 ]*)\)/
  const rgbText = regExp.exec(sRGB)
  const r = rgbText[1].trim()
  const g = rgbText[2].trim()
  const b = rgbText[3].trim()
  const result = [r,g,b].map(c => parseInt(c).toString(16))
    .map(c => c.length !== 2 ? '0'+c : c)

  result.splice( 0, 0, '#')
  return result.join('')
}