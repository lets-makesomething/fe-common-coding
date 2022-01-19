function trim1(str) {
    let i = 0
    let j = str.length - 1
    while (i !== j && (str[i] == ' ' || str[j] == ' ')) {
        if (str[i] == ' ') {
            i++
        }
        if (str[j] == ' ') {
            j--
        }
    }
    if (i == j) return ''
    return str.substring(i, j + 1)
}

function trim2(str) {
    return str.replace(/^\s*|\s*$/g, '')
}

console.log(trim1('    a bc     ')) // 'a bc'
console.log(trim1('         ')) // ''
console.log(trim2('    a bc     ')) // 'a bc'
console.log(trim2('         ')) // ''
