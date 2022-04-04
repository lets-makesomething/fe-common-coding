
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
   let reg = /^\s*rgb\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\)\s*$/
   if (reg.test(sRGB)) {
      let arr = sRGB.match(reg)
      let c1 = Number(arr[1])
      let c2 = Number(arr[2])
      let c3 = Number(arr[3])
      return "#" + c1.toString(16) + c2.toString(16) + c3.toString(16)
   } else return sRGB
}