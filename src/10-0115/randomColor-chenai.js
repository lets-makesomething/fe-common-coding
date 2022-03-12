/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */
// 返回十六进制颜色值
function randomColor1() {
    const randomStr = '0123456789ABCDEF'
    let str = ''
    while (str.length < 6) {
        let index = Math.floor(Math.random() * randomStr.length)
        str = str + randomStr.charAt(index)
    }
    return '#' + str
}

//随机生成RGB颜色
function randomColor2() {
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
}
const result1 = randomColor1()
const result2 = randomColor2()
console.log(result1, result2)