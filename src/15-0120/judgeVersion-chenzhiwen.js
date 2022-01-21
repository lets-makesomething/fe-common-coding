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
  // let oldArr = oldVersion.split('.').map(str => Number(str)) // => [a, b, c] 字符串数组转为数字数组
  // let newArr = newVersion.split('.').map(str => Number(str)) // => [A, B, C] 字符串数组转为数字数组
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
  // 方法二：去除点号后字符转数字比较——此方法仅限于处于 X ∈ [0, 9]；当 X ∈ [0, 99]，方法二处理 1.1.0  0.12.0 会失效
  // 注意：不能用字符串类型的数字进行比较： '123' 和 '2' => '123' < '2' => ASC码值的比较 '123' 中的 '1' 和 '2' 的 '2' 进行比较
  // let oldNum = Number(oldVersion.split('.').join(''))
  // let newNum = Number(newVersion.split('.').join(''))
  // return newNum > oldNum
  // 题目中规定 X ∈ [0, 9]，上述方法二得到的版本数字一定不超过三位数，在此规定下，可以采用这种方式取巧
  // 但是一般来说，版本号 X ∈ [0, 99]，上述方法利于拓展，如果出现新的需求，需要兼容 [0, 99]，需要对方法进行拓展
  // 方法三：在方法一的基础上，用循环处理
  // 类型守卫
  if (typeof oldVersion !== 'string' || typeof newVersion !== 'string') {
    throw new TypeError('只接受字符串')
  }
  let oldArr = oldVersion.split('.').map(str => Number(str))
  let newArr = newVersion.split('.').map(str => Number(str))
  if (oldArr.length !== 3 || newArr.length !== 3) {
    throw new Error('版本号格式不正确')
  }
  for (let i = 0; i < 3; i++) {
    if (newArr[i] > oldArr[i]) {
      return true
    } else if (newArr[i] === oldArr[i]) {
      // do nothing
      // 什么也不做，进入下一轮循环，比较下一位版本号
    } else {
      return false
    }
  }
}
