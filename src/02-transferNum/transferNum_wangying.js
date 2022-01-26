/**
 * @day2
 * @params num 123456
 * @return 123,456
 * toLocaleString()的实现
 */

// 方法一：从前往后添加,每间隔3位数字，需要加入一个逗号（,）数组长度加1，因此，每间隔3+1=4位后，去标记，且从startNum开始
function transferNum(num) {
  let numArr = (num || 0).toString().split('');
  const leftNum = numArr.length%3
  const sizeNum = Math.floor(numArr.length/3)
  const quoteNum=(leftNum===0)? sizeNum-1:sizeNum
  const startNum = (leftNum===0)?3:Number(leftNum)
  for(let i=0;i<quoteNum;i++){
    numArr.splice(i*4+startNum,0,',')
  }
  return numArr.join('')
}

// 方法二：从后往前添加
function transferNum(num) {
  let result = [ ], counter = 0;
  numArr = (num || 0).toString().split('');
  for (let i = numArr.length - 1; i >= 0; i--) {
      counter++;
      result.unshift(numArr[i]);
      if (!(counter % 3) && i != 0) { 
        result.unshift(',')
      }
  }
  return result.join('');
}

// 方法三： 方法二的思路，但是不操作数组，全程直接操作字符串，相对于方法二，性能更优
function transferNum(num) {
  let result = '', counter = 0;
  numNew = (num || 0).toString();
  for (let i = numNew.length - 1; i >= 0; i--) {
      counter++;
      result = numNew.charAt(i) + result;
      if (!(counter % 3) && i != 0) {
         result = ',' + result
      }
  }
  return result
}

// 方法四：将数据前面补0，使得位数一定为3的倍数，加3的倍数位后加逗号，最后去除前面的0
function transferNum(num) {
  let numNew = (num || 0).toString();
  const leftNum = numNew.length%3
  switch (leftNum) {
      case 1:
        numNew = '00' +num
        break
      case 2:
        numNew = '0' +num
        break
  }
  return numNew.match(/\d{3}/g).join(',').replace(/^0+/, '')
}
console.log(transferNum(123456))