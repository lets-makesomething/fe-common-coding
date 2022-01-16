function deepClone (target, map = new Map()) {
    if (typeof target !== 'object') return target;

    let cloneTarget = Array.isArray(target) ? [] : {};
    
    // 解决循环引用
    if (map.get(target)) {
      return map.get(target)
    }

    map.set(target, cloneTarget);
  
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
        cloneTarget[key] = clone(target[key], map);
        }
    }

    return cloneTarget;
}