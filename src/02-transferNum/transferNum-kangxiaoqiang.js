/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

function transferNum(num) {
    if (typeof num !== 'number') return
    let str = num.toString().split("").reverse()
    for (let i = 0; i < str.length; i++) {
        if (i % 4 === 0) {
            str.splice(i, 0, ',')
        }
    }
    str.shift()
    return str.reverse().join('')
}

console.log(transferNum(123456))
