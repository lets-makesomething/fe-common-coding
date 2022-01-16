 // 法一：JSON.stringify 和 JSON.parse
 function deepClone(obj) {
    let oldObj = JSON.stringify(obj);
    let newObj = JSON.parse(oldObj);
    return newObj;
  }
  const obj4 = deepClone(obj);
// 法二：利用递归进行遍历
function isPrimitive(value){
    return (
        typeof value ==='string'||typeof value === 'number' 
        ||typeof value ==='boolean' ||typeof value ==='symbol'
    )
}
function isObject(value){
    return Object.prototype.toString.call(value) === "[object Object]"
}
function deepClone2(value){
      // 记录被拷贝的值，避免循环引用的出现
    let memo = {}
    function baseClone(value){
        let res
        if(isPrimitive(value)){
            return value
        }else if(isObject(value)){
            res = {...value}
        }else if(Array.isArray(value)){
            res = [...value]
        }
        Reflect.ownKeys(res).forEach(key=>{
            if(typeof res[key] ==='object' && res[key]!==null){
                if(memo[res[key]]){
                    res[key] = memo[res[key]]
                }else {
                    memo[res[key]] =res[key]
                    res[key] = baseClone(res[key])
                }
            }
        })
        return res
    }
    return baseClone(value)
}