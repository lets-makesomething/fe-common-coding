/**
* @description 手动实现new
*/

function myNew(func) {
    //创建继承自func.prototype的新对象
    let newObj = Object.create(func.prototype);
    // 执行构造函数，绑定this指向
    let returnObj = func.apply(newObj, Array.prototype.slice.call(arguments, 1));

    // 返回
    return returnObj instanceof Object ? returnObj : newObj
}

function Person(name, age) {
    this.name = name
    this.age = age
}

const result = myNew(Person, '路人甲', 20)
console.log(result) // Person { name: '路人甲', age: 20 }
