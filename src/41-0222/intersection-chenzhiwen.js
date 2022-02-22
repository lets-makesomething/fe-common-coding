/**
 * 349. 两个数组的交集
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
 

提示：

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // need use map
  // 方法一：使用 map 超过40%的人
  // let map = new Map()
  // let result = []
  // for (let i = 0; i < nums1.length; i++) {
  //   if (!map.has(nums1[i])) {
  //     map.set(nums1[i], 1)
  //   }
  // }
  // for (let i = 0; i < nums2.length; i++) {
  //   if (map.has(nums2[i]) && !result.includes(nums2[i])) {
  //     result.push(nums2[i])
  //   }
  // }
  // return result
  // 方法二：使用 set 超过80%的人
  let len1 = nums1.length
  let len2 = nums2.length
  if (len1 === 0 || len2 === 0) {
    return []
  }
  let a, b
  if (len1 > len2) {
    a = nums1
    b = nums2
  } else {
    a = nums2
    b = nums1
  }
  return [...new Set(b.filter((item) => a.includes(item)))]
}
