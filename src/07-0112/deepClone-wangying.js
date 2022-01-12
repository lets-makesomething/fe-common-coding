function deepClone(data){
  let newObj;
  if(Array.isArray(data) ){
    newObj = []
  }else if(data.constructor === Object ){
    // 判断是否为对象，可用data.constructor === Object
    // 或者Object.prototype.toString.call(data)==='[object Object]'
    newObj = {}
  }else{
    return data
  }

for(let attr in data){
    if(typeof data[attr] === 'object'){
      newObj[attr] = deepClone(data[attr])
    }else{
      newObj[attr] = data[attr]
    }
}
return newObj
}
const obj={a:1,b:2,c:3,d:{e:5,f:{g:3}}}
const obj2 = deepClone(obj)
console.log("obj2",obj2)

const obj3 = ['a', 'b', {'c':3}, {'d':4}, {'e':{'f':5}}]
const obj4 = deepClone(obj3)
console.log("obj4",obj4)

const obj5 = 123
const obj6 = deepClone(obj5)
console.log("obj6",obj6)

const obj7 = new Date()
const obj8 = deepClone(obj7)
console.log("obj6",obj8)