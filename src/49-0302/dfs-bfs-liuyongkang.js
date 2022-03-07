/**
 * tree的 深度和广度遍历
 */

const tree = {
	val: 1,
	children: [
		{
			val: 2,
			children: [
				{
					val: 4,
					children: [],
				},
			],
		},
		{
			val: 3,
			children: [
				{
					val: 5,
					children: [],
				},
			],
		},
	],
};

// 深度优先
function dfs(tree) {
	const stack = [],
		result = [];
	stack.push(tree);

	while (stack.length != 0) {
		// 取最后面一个
		const item = stack.pop();
		const { children, ...otherProps } = item;
		result.push(otherProps);

		if (children && children.length !== 0) {
			// 从后面开始遍历
			for (let i = children.length - 1; i >= 0; i--) {
				stack.push(children[i]);
			}
		}
	}
	return result;
}

console.log(dfs(tree)); // [ { val: 1 }, { val: 2 }, { val: 4 }, { val: 3 }, { val: 5 } ]

// 广度优先
function bfs(tree) {
	const queue = [],
		result = [];
	queue.unshift(tree);

	while (queue.length != 0) {
		// 取最前面一个
		const item = queue.shift();
		const { children, ...otherProps } = item;
		result.push(otherProps);

		if (children && children.length !== 0) {
			// 从前面开始遍历
			for (let i = 0; i < children.length; i++) {
				queue.push(children[i]);
			}
		}
	}
	return result;
}

console.log(bfs(tree)); // [ { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 } ]
