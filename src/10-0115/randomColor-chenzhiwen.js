/**
 * 生成随机颜色
 */
function randomColor() {
  // 返回 rgb 颜色值
  // let rgb = Math.floor(Math.random() * 256)
  // return `rgb(${rgb()},${rgb()},${rgb()})`
  // 返回 hex 颜色值
  let hex = () => '0123456789abcdef'[Math.floor(Math.random() * 16)]
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex()
  }
  return color
}
