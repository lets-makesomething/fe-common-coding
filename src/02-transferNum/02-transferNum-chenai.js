/**
 * @day2
 * @params num 123456
 * @return 123,456
 */
// 第一种方法 正则
// function transferNum(num) {
//     if (typeof num !== 'number') return
//     return num.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
//         return s + ','
//     })
// }
// 第二种方法 将数字转化为字符串在进行反转，利用正则匹配三位数字，然后在进行反转
// function transferNum(num) {
//     if (typeof num !== 'number') return
//     function reverseStr(num) {
//         return num.toString().split('').reverse().join('')
//     }
//     return reverseStr(reverseStr(num).replace(/(\d{3})+?/g, function (s) {
//         return s + ",";
//     }))
// }

// 第三种 利用while循环，从后向前匹配
function transferNum(num) {
    if (typeof num !== 'number') return
    let oldStr = num.toString()
    let newStr = ''
    let i = oldStr.length - 1
    let j = 0
    while (i >= 0) {
        if (++j >= 3 && i !== 0) {
            j = 0
            newStr = ',' + oldStr[i] + newStr
        } else {
            newStr = oldStr[i] + newStr
        }
        i--
    }
    return newStr
}
export default transferNum
