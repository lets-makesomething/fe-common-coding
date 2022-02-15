/**
 * 判断一个字符串是不是回文
 * input: dad
 * output: true
 */

 function isPalindrome(s) {
    let res = 0
    for(let i=0;i<s.length/2;i++){
        if(s[i]!==s[s.length-i-1]){
            res++
            break
        }
    }
    if(res){
        return false
    }else{
        return true
    }
}
console.log(isPalindrome('dad'))