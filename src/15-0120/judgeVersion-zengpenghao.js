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



const shouldUpdate = (oldVersion, newVersion) => {
  if (typeof oldVersion !== "string" || typeof newVersion !== "string") {
    throw new Error("version must be a string");
  }
  
  const getNum = (s) => return s.split('.').join('');
  return getNum(newVersion) > getNum(oldVersion);

  // 需要严格按照约定格式输入
  // return newVersion > oldVersion;
}
