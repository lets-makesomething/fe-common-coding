const union = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        console.error('params is not a array')
        return
    }
    let arr = []
    a.forEach((item) => {
        if (b.findIndex((el) => el == item) > -1) {
            arr.push(item)
        }
    })
    return Array.from(new Set(arr))

}

const intersect = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        console.error('params is not a array')
        return
    }
    return Array.from(new Set(a.concat(b)))
}


