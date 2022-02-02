/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */

 function randomColor() {
  const r = Math.random() * 256
  const g = Math.random() * 256
  const b = Math.random() * 256
  const color = '#' + ((1 << 24) + (r << 16) + (g << 8) + (g << 0)).toString(16).substr(1)
  return color
 }