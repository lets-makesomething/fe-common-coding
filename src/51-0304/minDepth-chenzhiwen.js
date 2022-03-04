/**
 * 111. 二叉树的最小深度
    给定一个二叉树，找出其最小深度。

    最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

    说明：叶子节点是指没有子节点的节点。

    示例 1：

    输入：root = [3,9,20,null,null,15,7]
    输出：2

    示例 2：

    输入：root = [2,null,3,null,4,null,5,null,6]
    输出：5
    
    提示：

    树中节点数的范围在 [0, 10**5] 内
    -1000 <= Node.val <= 1000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
     return 0
  }
  if (!root.left && !root.right) {
     return 1
  }
  let min = Number.MAX_SAFE_INTEGER
  if (root.left) {
     min = Math.min(minDepth(root.left), min)
  }
  if (root.right) {
     min = Math.min(minDepth(root.right), min)
  }
  return min + 1
}

export default minDepth
