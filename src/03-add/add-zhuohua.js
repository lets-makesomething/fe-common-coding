
   
/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */
function add() {
  const args = Array.prototype.slice.apply(arguments);

  if (args.length > 1) {
    return reduce(args);
  } 

  return function() {
    const argsArr = args.concat(Array.prototype.slice.apply(arguments));
    return reduce(argsArr);
  }
}

const reduce = function(argsArr) {
  return argsArr.reduce((cur, prev) => cur + prev);
}

console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3 