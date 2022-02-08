/**
             * #leetcode  136 常见数组题目
              *
              * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

                  说明：

                  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

                  示例 1:

                  输入: [2,2,1]
                  输出: 1
                  示例 2:

                  输入: [4,1,2,1,2]
                  输出: 4
                
          */

// 异或操作中参加运算的两个数，如果两个相应位为“异”（值不同），则该位结果为1，否则为0。即 0 ^ 0=0 ， 0 ^ 1= 1 ， 1 ^ 0= 1 ， 1 ^ 1= 0 。
var singleNumber = function (nums) {
  let end = 0;
  nums.forEach((item) => {
    end = end ^ item;
    console.log(end, "end");
  });
  return end;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
// 第二种利用set结构,里面的元素是唯一
var singleNumber2 = function (nums) {
  let set = new Set();
  nums.forEach((element) => {
    if (set.has(element)) {
      set.delete(element);
    } else {
      set.add(element);
    }
  });
  return [...set][0]; //记得展开
};
console.log(singleNumber2([4, 1, 2, 1, 2]));
