/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */

 function add() {
    const _args = [].slice.call(arguments, 0);
    const _adder = function () {
      _args.push(...arguments);
      return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b;
      });
    };
    return _adder;
  }
  console.log(add(1, 2).toString());
  console.log(add(1)(2).toString());

  const curry = (fn) => {
    return function curried(...args) {
      console.log(args, fn.length, "aa");
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function () {
          return curried(...[...args, ...arguments]);
        };
      }
    };
  };
  const add1 = curry((a, b) => a + b);
  // console.log(add1(1,2,3))
  console.log(add1(1)(2)); // 3
