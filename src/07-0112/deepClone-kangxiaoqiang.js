/**
 * 
 * @param {*} obj 
 * @returns 
 */
function deepClone(obj) {
    function isObject(obj) {
        return typeof obj === "object" && typeof obj !== "null"
    }
    if (!isObject(obj)) {
        throw new Error("输入参数不是对象")
    }
    let res = Array.isArray(obj) ? [...obj] : { ...obj };
    Object.keys(res).forEach((key) => {
        res[key] = isObject(res[key]) ? deepClone(res[key]) : res[key]
    })
    return res
}