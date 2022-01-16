/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */

function randomColor() {
  let col = "#";
  for (let i = 0; i < 6; i++) {
    let color = parseInt(Math.random() * 16).toString(16);
    col += color;
  }
  return col;
}
console.log(randomColor());
