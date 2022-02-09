/**
 * input: 11111111111111111, 11111111111111111
 * output:22222222222222222
 */

var sum = function (a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  let t = 0;
  let f = 0; // 进位
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f === 1) {
    sum = "1" + num;
  }
  return sum;
};
console.log(sum("11111111111111111", "11111111111111119"));
