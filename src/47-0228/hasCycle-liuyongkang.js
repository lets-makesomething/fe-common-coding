/**
 * 141. 环形链表
    给你一个链表的头节点 head ，判断链表中是否有环。

    如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

    如果链表中存在环 ，则返回 true 。 否则，返回 false 。

    

    示例 1：



    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。
    示例 2：



    输入：head = [1,2], pos = 0
    输出：true
    解释：链表中有一个环，其尾部连接到第一个节点。
    示例 3：



    输入：head = [1], pos = -1
    输出：false
    解释：链表中没有环。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/linked-list-cycle/
// 两个人在圆形操场上的起点同时起跑，速度快的人一定会超过速度慢的人一圈。
// 用一快一慢两个指针遍历链表，如果指针能够相逢，那么链表就有圈。
// 用一快─慢两个指针遍历链表，如果指针能够相逢，就返回true。
// 遍历结束后，还没有相逢就返回false
var hasCycle = function (head) {
	let p1 = head;
	let p2 = head;
	while (p1 && p2 && p2.next) {
		p1 = p1.next;
		p2 = p2.next.next;
		if (p1 === p2) {
			return true;
		}
	}
	return false;
};
