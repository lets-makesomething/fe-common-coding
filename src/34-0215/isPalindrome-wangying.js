/**
 * 判断一个字符串是不是回文
 * input: dad
 * output: true
 */
// 方法一：
function isPalindrome(s){
  var len = s.length;
  var s1 = "";
  for(var i=len-1; i>=0;i--){
      s1+=s[i];
  }
  return s1===s
}

// 方法二
function isPalindrome(s){
  var len = s.length;
  for(var i=0; i<len;i++){
    if(s.charAt(i)!=s.charAt(len-1-i)){
       return false;
    }
  } 
  return true;
}

// 方法三
 function isPalindrome(s) {
   const sArr = s.split('');
   const sReversalArr = s.split('').reverse();
   return sReversalArr.every((item,index)=>{
         return item===sArr[index];
   })
 }

 // 方法四
 function isPalindrome(s) {
  const sArr = s.split('');
  const stack = []
  const len = sArr.length
  const stackLength = Math.floor(sArr.length/2)
  const compareStart = Math.round(sArr.length/2)
  for(let i=0;i<stackLength;i++) {
    stack.push(sArr[i])
  }
  for(let j=compareStart;j<len;j++) {
    if(sArr[j]===stack[stack.length-1]){
      stack.pop()
    }else{
      return false
    }
  }
  return stack.length===0
}
console.log(isPalindrome('da1ad'))