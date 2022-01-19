/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */

function transferWords(s) {
    // 防止单词与单词之间出现多余的空格
    const arr = s.replace(/\s{1,}/g, ' ').split(' ')
    let newS = ''
    arr.forEach(word => {
        newS =
            newS +
            word.replace(/^[a-z]{1}/, function (s) {
                return s.toUpperCase()
            }) +
            ' '
    })
    return newS
}
console.log(transferWords('hello everyone, this is our first question topic.'));  