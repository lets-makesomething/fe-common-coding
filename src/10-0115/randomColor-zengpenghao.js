/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 * @return #000000 到 #ffffff
 */

function randomColor() {
  // << 左移运算符
  return `#${Math.floor(Math.random() * 0xffffff<<0).toString(16)}`;

  // or

  // parseInt("0xffffff",16).toString(10) = 16777215
  // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomColor2() {
  return  '#' +
    (function getColor(color) {
    return (color +=  '0123456789abcdef'[Math.floor(Math.random() * 16)])
      && (color.length === 6) ?  color : getColor(color);
  })('');
}

function randomColor3(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}