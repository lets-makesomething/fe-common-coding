
function deepClone(target, map = new Map()) {
    // 解决循环引用
    if(map.get(target)) return target
    if (typeof target == 'object') {
        map.set(target, true);
        const cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = deepClone(target[prop], map);
            }
        }
        return cloneTarget

    } else {
        return target
    }
}


