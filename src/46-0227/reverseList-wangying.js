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
var reverseList = function(head) {
  let cur = head  // 原链表
  let pre = null // 翻转后的链表
  if(cur === null || cur.next === null){
    return cur
  }
  while(cur) {
      console.log(pre)
      const temp = cur.next
      cur.next = pre  
      pre = cur
      cur = temp
  }
  return pre
};

class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
let  head =  new ListNode('1')
head.next = new ListNode('2')
head.next.next = new ListNode('3')
head.next.next.next = new ListNode('4')
head.next.next.next.next = new ListNode('5')
console.log('reverseList',reverseList(head))