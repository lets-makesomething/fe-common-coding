/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * 2. 两数相加
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 

提示：

每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	if (!l1 && !l2) return null;
	// 链表头
	let head = null;
	// 当前链表位置
	tail = null;
	// 存放当前计算的值
	let sum = 0;
	// 存放进位
	let remainder = 0;

	while (l1 || l2) {
		//  取读链表中当前位置的值(指针)
		let n1 = l1 ? l1.val : 0;
		let n2 = l2 ? l2.val : 0;
		// 计算
		sum = n1 + n2 + remainder;
		// 计算进位(满十进一)
		remainder = Math.floor(sum / 10);
		// 存入计算的值(取个位)
		if (!head) {
			// 链表头
			head = tail = new ListNode(sum % 10);
		} else {
			// 链表向下链接
			tail.next = new ListNode(sum % 10);
			// 更新链表位置(指针++)
			tail = tail.next;
		}
		// 更新链表位置(指针++)
		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
	}

	// 存在进位 则链表下一项进一位
	if (remainder) tail.next = new ListNode(1);

	return head;
};

// 测试
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [ 7, 0, 8 ]
console.log(addTwoNumbers([0], [0])); // [ 0 ]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // [ 8, 9, 9, 9, 0, 0, 0, 1 ]
