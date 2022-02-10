/**
 * 有一段英文，请将这段英文中每个单词的首字母都变成大写。
 * eg：hello everyone, this is our first question topic.
 */

// 方法一：数组
function transferWords(s){
  let result = s.split(' ')
  const newStrArr = result.map(word => {
    // return word[0].toUpperCase() + word.slice(1)
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());  
  })
  return newStrArr.join(' ')
}

// 方法二：正则
function transferWords(s) {  
  return s.replace(/\b([\w]+)\b/g, function(word) {  
      // return word[0].toUpperCase() + word.slice(1);  
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());  
  });  
}  
console.log(transferWords('hello everyone, this is our first question topic.'));  
