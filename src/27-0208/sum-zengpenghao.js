
/**
 * input: 11111111111111111, 11111111111111111
 * output:22222222222222222
 */

var sum = function(a,b){
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('Type Error!');
  } 
  let i = a.length - 1, j = b.length - 1, res = [], add = 0;

  while (i >= 0 || j >= 0 || add != 0) {
    let n1 = i >= 0 ? a.charAt(i) - '0' : 0,
        n2 = j >= 0 ? b.charAt(j) - '0' : 0,
        sum = n1 + n2 + add;
    res.push(sum % 10);
    add = Math.floor(sum / 10);
    i--;
    j--;
  }
  
  return res.reverse().join('');
}

console.log(sum('11111111111111111', '11111111111111111'))