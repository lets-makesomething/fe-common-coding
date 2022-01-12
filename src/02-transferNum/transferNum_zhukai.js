/**
 * @day2
 * @params num 123456
 * @return 123,456
 */

 function transferNum(num) {
    let num2=String(num);
    let arr=num2.split("").reverse();
    arr.forEach((item,index,array)=>{
        if((index+1)%3==0 && (index+1)!==arr.length){
            array[index]=','+item;
        }
    })
    return arr.reverse().join("");
 }
console.log(transferNum(12345678))
