/**

     * 求 a 和 b 相乘的值，a 和 b 可能是小数

     * @param {*} a

     * @param {*} b

     * tips: 精度

     */



function multiply(a, b) {

    let strA = a.toString()

    let strB = b.toString()

    let lenDecimalA =

        strA.indexOf('.') == -1 ? 0 : strA.length - strA.indexOf('.') - 1

    let lenDecimalB =

        strB.indexOf('.') == -1 ? 0 : strB.length - strB.indexOf('.') - 1



    if (lenDecimalA > 0 && lenDecimalB > 0) {

        return (a * b).toFixed(lenDecimalA + lenDecimalB)

    }

    return lenDecimalA * lenDecimalB

}

console.log(multiply(0.1, 0.1))
