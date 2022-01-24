/**
 * @day3
 * add(1,2) => return 3
 * add(1)(2) => return 3
 */

function add() {
  return arguments.length >= 2 ? (arguments[0] + arguments[1]) : add.bind( this, ...arguments)
}