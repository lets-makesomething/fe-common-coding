/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

 function transferNum(num) {
   return num.toLocaleString('zh', {useGrouping: true})
 }