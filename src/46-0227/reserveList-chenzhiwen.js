/**
 * 206. 反转链表
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  let prev = null, curr = head
  while (curr) { // 以循环的方式，将原链表的头节点转为新链表的尾结点
    // 暂存 curr 的下一个节点
    let next = curr.next
    // 将 curr 的下一个节点指向 prev
    curr.next = prev
    // 将 prev 指向 curr
    prev = curr
    // 将 curr 指向 next
    curr = next
  }
  head = prev
  return head
}

export default reverseList
