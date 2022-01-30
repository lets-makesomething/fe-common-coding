
function convertToBinary(num) {
    if (typeof num !== 'number') {
        throw new Error('params is not number')
    }
    let result = ''
    if (num < 0) {
        let binary = toBinary(Math.abs(num))
        result = add(contrary(binary), '1')
        return result.length < 7 ? '1' + result.padStart(7, 1) : '1' + result
    }
    if (num >= 0) {
        result = toBinary(num)
        return result.length < 8 ? result.padStart(8, 0) : result
    }
    function toBinary(num) {
        if (0 <= num && num < 2) {
            return num.toString()
        }
        return toBinary(parseInt(num / 2)) + (num % 2).toString()
    }

    function contrary(str) {
        let i = 0
        let newStr = ''
        while (i < str.length) {
            if (str.charAt(i) == '1') {
                newStr += '0'
            }
            if (str.charAt(i) == '0') {
                newStr += '1'
            }
            i++
        }
        return newStr
    }
    function add(str1, str2) {

        let a = str1.length - 1

        let b = str2.length - 1

        let result = []

        let prefix = 0

        while (a >= 0 || b >= 0) {

            let cur1 = a >= 0 ? Number(str1.charAt(a--)) : 0

            let cur2 = b >= 0 ? Number(str2.charAt(b--)) : 0

            let sum = cur1 + cur2 + prefix

            prefix = sum >= 2 ? 1 : 0

            sum = sum >= 2 ? sum - 2 : sum

            result.unshift(sum)

        }

        if (prefix == 1) {

            result.unshift(prefix)

        }

        return result.join('')

    }

}
console.log(convertToBinary(65))