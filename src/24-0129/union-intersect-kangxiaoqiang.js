
/**
 * 
 * @param {array} a 
 * @param {array} b 
 * 求两个数组的交集和并集
 */

const union = (a, b) => {
    return a.concat(b.filter(x => a.indexOf(x) === -1))
}

const intersect = (a, b) => {
    return a.filter(x => b.indexOf(x) > -1)
}