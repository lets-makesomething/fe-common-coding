/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */

function randomColor() {
  // 十六进制
  const color = Math.floor(Math.random() * 0xffffff * 1000000).toString(16);
  return `#${color.slice(0, 6)}`;
}