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
/** 第一种思路，使用map结构，遍历每个节点，如果这个节点没有遍历过，就放进map中，如果能够第二次访问到
       即证明有环
       */
var hasCycle = function (head) {
  const map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, true);
    head = head.next;
  }
};
/** 
       第二种思路，快慢指针方法，快的指针永远比慢的指针多走一步，那么就意味着如果有环就一定会相遇
       */
var hasCycle = function (head) {
  if (!head) return false; // 需要考虑为空的时候
  let p1 = head;
  let p2 = head.next;
  while (p1 && p2 && p2.next) {
    // 需要考虑只有2个节点的情况
    if (p1 === p2) {
      return true;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return false;
};
