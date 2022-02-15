/**
 * 判断一个字符串是不是回文
 * input: dad
 * output: true
 */

 function isPalindrome(s) {
   for (let i = 0, len = s.length; i < len/2; i++) {
     if (s[i] !== s[len - i - 1]) {
       return false;
     }
   } 
   return true;
 }