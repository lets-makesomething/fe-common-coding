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

    树中节点数的范围在 [0, 105] 内
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
	// 空树直接返回
	if (!root) return 0;
	// 讲root节点保存到队列中
	const queue = [root];
	// 记录深度
	let dep = 0;

	while (true) {
		let size = queue.length;

		// 每遍历一层层数递增
		dep++;
		while (size--) {
			// 取出第一个节点
			const node = queue.shift();

			// 到第一个最小的叶子节点 返回 当前深度
			if (!node.left && !node.right) return dep;

			// 将左子树添加到队列中
			node.left && queue.push(node.left);

			// 将右子树添加到队列中
			node.right && queue.push(node.right);
		}
	}
};
