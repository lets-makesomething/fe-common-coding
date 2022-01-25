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
    function vailteVersion(version) {
        return /^(\d.){2}\d$/.test(version)
    }
    if (!vailteVersion(oldVersion)) {
        throw new Error('oldVersion is error')
    }
    if (!vailteVersion(newVersion)) {
        throw new Error('newVersion is error')
    }
    let oldVersionArr = oldVersion.split('.')
    let newVersionArr = newVersion.split('.')
    let i = 0

    while (i < oldVersionArr.length) {
        if (parseInt(oldVersionArr[i]) < parseInt(newVersionArr[i])) {
            return true
        }
        i++
    }
    return false
}

console.log(shouldUpdate('1.1.0', '1.1.1')) // true
console.log(shouldUpdate('1.1.0', '1.1.0')) // false
console.log(shouldUpdate('1.1', '11')) // error
console.log(shouldUpdate('11.1.0', '1.1.0')) // error
console.log(shouldUpdate('1.15.0', '1.1.0')) // error