/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

 function transferNum(num) {
    const numString  = num.toString()
    const num1 = Number(numString.slice(0,3))
    const num2 = Number(numString.slice(3))
    const res = [num1,num2].join()
    return res
}
