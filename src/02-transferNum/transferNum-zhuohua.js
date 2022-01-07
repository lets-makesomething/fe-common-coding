/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

function transferNum(num) {
  return num && num.toString()
      .replace(/\d+/, function(s){
            return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        })
}

transferNum(123456)
