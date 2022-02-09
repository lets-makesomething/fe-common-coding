
/**
 * leetcode 1
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

    你可以按任意顺序返回答案。

    示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]
    示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]

 */

/** 给定一个整数数组 nums 和一个整数目标值 target，以数组形式，返回整数数组中和为目标值的两个整数的下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
         continue
      } else {
         for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] >= target) {
               continue
            }
            if (nums[j] + nums[i] == target) {
               return [i, j]
            }
         }
      }
   }
}

export default twoSum
