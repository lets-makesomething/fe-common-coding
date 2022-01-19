/**
 *
 * @description 写一个方法，这个方法要生成并返回一个随机颜色。
 */


// 分析问题：   颜色可以表达的几种方式
// 1. #000000           6为0-f的16进制数
// 2. rgb(255,255,255)  3个0-255的值
//    r 红色    数值范围    0-255
//    g 绿色    数值范围    0-255
//    b 蓝色    数值范围    0-255
// 3. rgba(255,255,255,1)   
//    a 透明值  数值范围    0-1
// 4. hsla(80,100%,50%,1)
//    h 色彩          数值范围    0-360      
//    s 饱和度        数值范围    0-100%     越高色彩越纯，低则逐渐变灰
//    l 亮度          数值范围    0-100%     减少亮度，颜色会向黑色变化
//    a 透明度        数值范围    0-1

// 要点: 就是随机生成一个值     Math.random()

// 方式1：随机生成十六进制的颜色值
function randomColor1() {
    // 定义16进制值的取值返回范围
    const colorArr = "0123456789abcdef";
    // 定义颜色值的字符串，和遍历的次数
    let color = "#",
        len = 6;
    // 遍历生成随机6个16进制的颜色值，并且拼接字符串
    while (len--) color += colorArr[Math.floor(Math.random() * colorArr.length)];
    // 返回16进制的颜色值
    return color;
}
console.log("方式1", randomColor1());

// 方式2： 随机RGB颜色值
function randomColor2() {
    // 随机生成0-255的值
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // 返回rgb颜色值
    return `rgb(${r},${g},${b})`;
    // 返回16进制颜色值
    // return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
console.log("方式2", randomColor2());

// 方式3： 随机RGBA颜色值
function randomColor3() {
    // 随机生成0-255的值
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random(); //随机生成1以内a值
    // 返回rgb颜色值
    return `rgba(${r},${g},${b},${a})`;
}
console.log("方式3", randomColor3());

// 方式4：随机生成hsla的颜色值
function randomColor4() {
    // 随机一个0~360的颜色值范围
    const colorAngle = Math.floor(Math.random() * 360);
    // 拼装hsla的颜色值字符串（后面的饱和度、亮度、透明度按自己需求给值即可）
    return `hsla(${colorAngle},100%,50%,1)`;
}
console.log("方式4", randomColor4());

// 方式5    随机生成十六进制的颜色值     
function randomColor5() {
    // #000000 到 #ffffff，后面那六位数是16进制数，相当于“0x000000”到“0xffffff”。
    // return '#' + Math.floor((Math.random() * 0xffffff) << 0).toString(16);

    //生成ffffff以内16进制数
    let hex = Math.floor(Math.random() * 0xffffff << 0).toString(16);

    // while循环判断hex位数，少于6位前面加0凑够6位
    while (hex.length < 6) hex = '0' + hex;

    //返回16进制颜色
    return '#' + hex;
}
console.log("方式5", randomColor5());


// 方式6    随机生成十六进制的颜色值   
function randomColor6() {
    // 随机生成十六进制颜色
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
console.log("方式6", randomColor6());