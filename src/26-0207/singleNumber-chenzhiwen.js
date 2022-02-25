/** 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {array} nums
 * @returns {number}
 * @description 算法应该具有线性时间复杂度；不使用额外空间来实现
 * @description 输入 [2,2,1] 输出 1
 * @description 输入 [4,1,2,1,2] 输出 4
 */
var singleNumber = function(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError('请输入数组')
  }
  let length = nums.length
  if (length === 1) {
    return nums[0]
  }
  let result = 0
  for (let i = 0; i < length; i++) {
    result ^= nums[i]
  }
  return result
}

export default singleNumber
