/**
 * 树的前中后序遍历
 */

const bt = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: null,
		},
		right: {
			val: 5,
			left: null,
			right: null,
		},
	},
	right: {
		val: 3,
		left: {
			val: 6,
			left: null,
			right: null,
		},
		right: {
			val: 7,
			left: null,
			right: null,
		},
	},
};

// 四种遍历方式：前序、中序、后序遍历，按层遍历；所谓“前中后”是以根节点的遍历顺序的位置说的。
// 前序：根节点-左节点-右节点
// 中序：左节点-根节点-右节点
// 后序：左节点-右节点-根节点
// 遍历规则：从第一层级开始，若节点还有子节点，就往下一层进行遍历，保证每层的遍历方式都是前序（中、后），子节点遍历完毕后，再回到上一层继续遍历
// 以下为例
function treeOrder(result) {
	let stack = [],
		queue = [];
	let now = result;
	let data = [];

	while (now !== null || queue.length !== 0) {
		if (now !== null) {
			// 遍历左子树
			stack.push(now); // 分别将二叉树的结点压入栈和队列中
			queue.push(now);
			now = now.left;
		} else {
			// 遍历右子树
			const { left, right, ...otherProps } = queue.shift(); // 注意此时弹出的为队列中的第一个元素
			data.push(otherProps);
			now = stack.pop().right;
		}
	}
	return data;
}

// 测试
console.log(treeOrder(bt));
// [
// 	{ val: 1 },
// 	{ val: 2 },
// 	{ val: 4 },
// 	{ val: 5 },
// 	{ val: 3 },
// 	{ val: 6 },
// 	{ val: 7 },
// ];
