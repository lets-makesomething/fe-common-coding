/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */
 // 十六进制
 function randomColor() {
  var hex = Math.floor(Math.random()* 0x1000000<<0).toString(16); 
  while (hex.length < 6) { 
   hex = '0' + hex;
  }
  return '#' + hex; 
 }

 // rgb格式
 const rgbNum = ()=>Math.floor(Math.random() * 256)
 function randomColor() {
  return `rgb(${rgbNum()},${rgbNum()},${rgbNum()})`
 }









