

function deepClone(target){
    if(typeof target ==='object' && target!==null){
        const cloneTarget=Array.isArray(target)?[]:{};
        for(let prop in target){
           // cloneTarget[prop] = deepClone(target[prop]);
           // if (target.hasOwnProperty(prop)) {
               // 递归调用深拷贝方法
               cloneTarget[prop] = deepClone(target[prop]);
           // }
        }
        return cloneTarget;
    }else{
        return target;
    }
}
