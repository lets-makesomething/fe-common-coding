/**
 * 
 * @param {*} oldVersion 
 * @param {*} newVersion 
 * 请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
注意：
1. 版本号格式均为"X.X.X"
2. X∈[0,9]
3. 当两个版本号相同时，不需要更新
 */


function verify( version ) {
  const arr = version.split('.')
  if(arr.length !== 3) return false

  const allowNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  if(allowNumber.includes(arr[0]) && allowNumber.includes(arr[1]) && allowNumber.includes(arr[2])) return true
  return false
}

/**
 * @description 比对版本号，查看是否需要更新
 * @param {string} oldVersion 老的版本号
 * @param {string} newVersion 新的版本号
 * @returns {boolean} 是否需要更新
 */
const shouldUpdate = (oldVersion, newVersion) => {
  if(!verify(oldVersion) || !verify(newVersion)) throw new RangeError('参数不合法')
  
  const oldArr = oldVersion.split('.')
  const newArr = newVersion.split('.')
  if(oldArr[0] < newArr[0]) return true
  else if(oldArr[0] === newArr[0] && oldArr[1] < newArr[1]) return true
  else if(oldArr[0] === newArr[0] && oldArr[1] === newArr[1] && oldArr[2] < newArr[2]) return true
  else return false
}