
function rgb2hex(sRGB) {
    if (!validate(sRGB)) return sRGB
    // 移除空格
    let str = sRGB.replace(/\s*/g, '')
    let newStr = '#'
    // 匹配数字
    str.replace(/\d{1,3}/g, function (s) {
        newStr += Number(s).toString(16)
        return s
    })
    return newStr
    function validate(sRGB) {
        return /^rgb\((\s*((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\s*),(\s*((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\s*),(\s*((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\s*)\)$/.test(
            sRGB
        )
    }
}
console.log(rgb2hex('rgb(255, 255, 255)'))
