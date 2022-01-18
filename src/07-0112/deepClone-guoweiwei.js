function deepClone(obj) {
  if (obj == null) {
    return null;
  }
  var result = Array.isArray(obj) ? [] : {};
  // for...in可以使用数组和对象，数组的时候key是下标，对象的时候key是键名
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        result[key] = copyFn(obj[key]); // 如果是对象，再次调用该方法自身
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
var obj1 = {
  name: "obj1",
  func: function () {
    console.log("func1");
  },
  obj1Arr: ["1", "2", "3"],
  obj1Obj: {
    name: "obj1Obj",
  },
};
var obj2 = deepClone(obj1);
console.log(obj1); // 修改name属性之前，打印出来 name 也是 Edited
obj1.name = "test";
console.log(obj1); // 修改name属性之后，打印出来 name 是 Edited
console.log(obj2); // 由于是深拷贝，修改obj_1 的 name属性之前，不影响 obj_2 的 name 属性
