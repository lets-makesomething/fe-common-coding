
const onceUnit = (arr) => {
    let map = {}
    arr.forEach((item) => {
        if (map[item]) {
            map[item] = ++map[item]
        } else {
            map[item] = 1
        }
    })
    return Object.keys(map).find((el) => map[el] == 1)
}