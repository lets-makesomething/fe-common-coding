/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */


function transferWords(str) {
    return str.replace(/\b([\w]+)\b/g, function (z) {
        return z.replace(z.charAt(0), z.charAt(0).toUpperCase());
    });
}
console.log(transferWords("hello everyone, this is our first question topic. it's a open")); 