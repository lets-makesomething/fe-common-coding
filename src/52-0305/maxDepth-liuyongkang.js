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
	// 空树直接返回
	if (!root) return 0;

	// 讲root节点保存到队列中
	const queue = [root];

	// 记录深度
	let dep = 0;

	while (queue.length) {
		let size = queue.length;

		// 每遍历一层层数递增
		dep++;

		while (size--) {
			// 取出第一个节点
			let node = queue.shift();

			// 将左子树添加到队列中
			node.left && queue.push(node.left);

			// 将右子树添加到队列中
			node.right && queue.push(node.right);
		}
	}
	// 遍历完所有的子节点返回最深的一个dep
	return dep;
};
