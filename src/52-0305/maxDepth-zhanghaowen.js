/**
 * 104. 二叉树的最大深度
    给定一个二叉树，找出其最大深度。

    二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

    说明: 叶子节点是指没有子节点的节点。

    示例：
    给定二叉树 [3,9,20,null,null,15,7]，

        3
      / \
      9  20
        /  \
      15   7
    返回它的最大深度 3 。
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
var maxDepth = function (root) {
  const res = [];
  if (!root) {
    return res.length;
  }
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let leaves = queue.length;
    res.push([]);
    for (let i = 0; i < leaves; i++) {
      const node = queue.shift();
      res[res.length - 1].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res.length;
};
