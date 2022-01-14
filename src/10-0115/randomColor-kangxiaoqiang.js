/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */
/**
 * 
 * @param {*} type 返回颜色的格式，'rgba'、'rgb'、'#FFFFFF'，默认是'rgba'
 * @param {*} opacity 返回颜色的透明度，Number 类型 默认是 1
 * @returns String
 */

function randomColor(type = "rgba", opacity = 1) {
    let red = Math.ceil(Math.random() * 256)
    let green = Math.ceil(Math.random() * 256)
    let blue = Math.ceil(Math.random() * 256)
    if (typeof type === 'number') {
        opacity = type
        type = 'rgba'
    }
    if (opacity >= 0) {
    } else {
        opacity = Math.floor(Math.random() * 101) / 100
    }
    switch (type) {
        case 'rgb':
            return `rgb(${red},${green},${blue})`
        case '#':
            return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}${Math.round((opacity * 255)).toString(16)}`
        default:
            return `rgba(${red},${green},${blue},${opacity})`
    }
}
