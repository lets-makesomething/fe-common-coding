

/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    in : [4,1,2,1,2]
    output: 4

    in : [1 , 1, 2]
    output: 2
 */

// 位运算
const onceUnit = arr => {
   let ans = 0;

   for (num of arr) {
      ans ^= num;
   }

   return ans;
}

// 哈希表
const onceUnit_hash = arr => {
   let map = new Map();

   arr.forEach(ele => {
      if(!map.get(ele)) {
         map.set(ele, 1);
      } else {
         let num = map.get(ele);
         map.set(ele, ++num);
      }
   });

   for ([key, value] of map) {
      if (value === 1) {
         return key;
      }
   }
}