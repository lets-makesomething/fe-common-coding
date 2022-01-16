/**
 * @day2
 * @params num 123456
 * @return 123,456
 */
// 第一种方法 将数字转化为字符串在进行反转，利用正则匹配三位数字，然后在进行反转
function transferNum1(num) {
    if (typeof num !== 'number') return
    // 反转字符串
    const reverseStr = num => num.toString().split('').reverse().join('')

    let [intergerNum, decimalNum] = num.toString().split('.');

    const str = reverseStr(reverseStr(intergerNum).replace(/(\d{3})+?/g, function (s) {
        return s + ",";
    }))

    const intergerStr = str.charAt(0) == ',' ? str.substring(1, str.length) : str
    return intergerStr + (decimalNum ? `.${decimalNum}` : '')
}

// 第二种 利用while循环，从后向前匹配
function transferNum2(num) {
    if (typeof num !== 'number') return
    let [intergerNum, decimalNum] = num.toString().split('.');
    let intergerStr = ''
    let i = intergerNum.length - 1
    let j = 0
    while (i >= 0) {
        if (++j >= 3 && i !== 0) {
            j = 0
            intergerStr = ',' + intergerNum[i] + intergerStr
        } else {
            intergerStr = intergerNum[i] + intergerStr
        }
        i--
    }

    return intergerStr + (decimalNum ? `.${decimalNum}` : '')
}

export default transferNum2
