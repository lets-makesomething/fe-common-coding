/**
 * @day2
 * @params num 123456
 * @return string 123,456
 */
//以3为标识，
function transferNum (num) { 
  if (!num) return
  return (num).toString().replace(/3/g, ($0) => $0 + ',') //RegExp替换
}