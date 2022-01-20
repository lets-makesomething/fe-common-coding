/**
 * 根据版本判断是否需要升级
 * @param {*} oldVersion 旧版本
 * @param {*} newVersion 新版本
 * @description 当新版本高于旧版本时表明需要更新，返回true，否则返回false
 * @description 版本号格式均为"X.X.X"
 * @description X∈[0,9]
 * @description 当两个版本号相同时，不需要更新
 */
const shouldUpdate = (oldVersion, newVersion) => {
  // 方法一：笨办法一位一位比较
  // let oldArr = oldVersion.split('.') // => [a, b, c]
  // let newArr = newVersion.split('.') // => [A, B, C]
  // let index = 0
  // // 逐步比较上述两个数组对应索引元素的大小
  // if (newArr[0] > oldArr[0]) { // A > a
  //   return true
  // } else if (newArr[0] === oldArr[0]) { // A === a
  //   // 接着对比下一个
  //   if (newArr[1] > oldArr[1]) {
  //     return true
  //   } else if (newArr[1] === oldArr[1]) {
  //     if (newArr[2] > oldArr[2]) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return false
  //   }
  // } else {
  //   return false
  // }
  // 方法二：去除点号后字符转数字比较
  // 注意：不能用字符串类型的数字进行比较： '123' 和 '2' => '123' < '2' => ASC码值的比较 '123' 中的 '1' 和 '2' 的 '2' 进行比较
  let oldNum = Number(oldVersion.split('.').join(''))
  let newNum = Number(newVersion.split('.').join(''))
  return newNum > oldNum
}
