/**
 * 88. 合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

    请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

    注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

     

    示例 1：

    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]
    解释：需要合并 [1,2,3] 和 [2,5,6] 。
    合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
    示例 2：

    输入：nums1 = [1], m = 1, nums2 = [], n = 0
    输出：[1]
    解释：需要合并 [1] 和 [] 。
    合并结果是 [1] 。
    示例 3：

    输入：nums1 = [0], m = 0, nums2 = [1], n = 1
    输出：[1]
    解释：需要合并的数组是 [] 和 [1] 。
    合并结果是 [1] 。
    注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
     

    提示：

    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

 */

/** 非递减数组融合
 * @param {number[]} nums1 非递减数组nums1
 * @param {number} m 非递减数组nums1中非零元素的个数
 * @param {number[]} nums2 非递减数组nums2
 * @param {number} n  非递减数组nums2中元素的个数
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums1 长度为 m+n
  // nums1 前m个元素为非递减非零，后n个元素为零
  if (m === 0) {
    nums1.splice(0, n, ...nums2)
  } else if (n === 0) {
    // do nothing
  } else {
    // 方法一
    // // 暴力融合
    // nums1.splice(m, n, ...nums2)
    // // 再对 nums1 排序
    // nums1.sort((a, b) => a - b)
    // 方法二
    // nums1 分为两部分，一部分为 m 个非零非递减元素，一部分为 n 个零，n 个零可以理解为 nums2 元素的占位
    let i = 0 // 用于遍历 nums1 中所有元素，即 m + n
    let j = 0 // 用于遍历 nums2 中所有元素，即 n
    while (j < n) {
      if (nums1[i] <= nums2[j] && nums1[i] !== 0) {
        i++
      } else {
        // 每从 nums2 中插入一个元素到 nums1 中，就移除 nums1 一个占位的零
        nums1.splice(i, 0, nums2[j])
        nums1.pop()
        j++
      }
    }
  }
}

export default merge
