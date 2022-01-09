/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */


// 实现方式: 通过柯里化函数实现

/**
 * 实现函数柯里化
 * @param {}} func  需要柯里化的函数
 * 作用：
 * 1. 柯里化 (_curry) (多元函数->一元函数的转变 把之前的结果存起来)
 * 2. 当一个函数有多个参数的时候先传递一部分参数调用它 (这部分参数以后永远不变)
 * 3. 然后返回一个新的函数接受剩余的参数，并返回结果
 */
const _curry = (func) => {
    // 柯里化函数
    return function curried(...args) {
        // 形参大于实参直接执行
        if (args.length >= func.length) {
            return func(...args);
        } else {
            // 形参小于实参返回一个函数并且函数内部递归调用柯里化函数
            return function () {
                return curried(...[...args, ...arguments]);
            };
        }
    };
};

// 通过柯里化函数把函数更加细粒化
const add = _curry((a, b) => (a + b));
console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3

