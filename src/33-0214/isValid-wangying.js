 var isValid = function(s) {
   const len = s.length
   if(len%2 !== 0) return false
   const stack = []
   const map = new Map([['(',')'],['[',']'],['{','}']])
   for(let i=0;i<len;i++){
      var item = s[i]
      if(map.has(item)){
        stack.push(item)
      }else{
        const topItem = stack[stack.length-1]
        if(map.get(topItem)===item ){
           stack.pop(item)
        }else{
           return false
        }
      }
   }
   return stack.length===0
};

console.log(isValid('({[]})'))