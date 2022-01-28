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
  if (!sRGB.startsWith("rgb")) {
    return sRGB;
  }
  const str = sRGB.replaceAll(" ", "");
  const str1 = str.split("(")[1];
  const str2 = str1.split(")")[0].split(",");
  let color = "#";
  const arr = str2.map((item) => {
    return Number(item);
  });
  const res = arr.some((item) => {
    return item < 0 || item > 255;
  });
  if (res) {
    return sRGB;
  }
  arr.map((item) => {
    color += Number(item).toString(16);
  });
  return color;
}
console.log(rgb2hex("rgb(255,   255, 255)"));
