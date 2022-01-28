/**
 * 
 * @param {*} str 
 * 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 * input abba
 * output true
 */

function containsRepeatingLetter(str) {
  const strArr = str.split('')
  let result = false;
  strArr.some((_,index) =>{
    if(strArr[index]===strArr[index-1]){
      result = true
    }
  })
  return result
}
console.log(containsRepeatingLetter('aaba'))