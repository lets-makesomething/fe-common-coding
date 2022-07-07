/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

    你可以假设除了整数 0 之外，这个整数不会以零开头。

     

    示例 1：

    输入：digits = [1,2,3]
    输出：[1,2,4]
    解释：输入数组表示数字 123。
    示例 2：

    输入：digits = [4,3,2,1]
    输出：[4,3,2,2]
    解释：输入数组表示数字 4321。
    示例 3：

    输入：digits = [0]
    输出：[1]
     

    提示：

    1 <= digits.length <= 100
    0 <= digits[i] <= 9
 */

/** 对数组元素进行加一操作
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 当前加法本质：从后往前遍历，如果当前位不是9，则直接加1，如果是9，则把当前位置置为0，然后继续往前遍历，直到最后一位不是9，则直接加1
  // 汽车里程表
  // 便于理解，先将数组进行翻转，从前往后进行遍历操作
  // 极端情况：[9,9, ..., 9] 100个9 => [0, 0, ..., 0] 100个0，最后一次加1后进的1可以忽略，可以看成是汽车里程表满了以后的重置
  let temp = digits.reverse()
  let len = temp.length
  for (let i = 0; i < len; i++) {
    if (temp[i] === 9) {
      temp[i] = 0
      if (i === len - 1 && i !== 99) {
        temp.push(1)
      }
    } else {
      temp[i] += 1
      break
    }
  }
  return temp.reverse()
}

export default plusOne
