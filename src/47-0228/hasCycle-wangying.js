/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
   let fast = head,slow = head;
   if (fast.next == null || fast.next.next == null) return false;
   while (fast && fast.next) {
     slow = slow.next;
     fast = fast.next.next;
     if (slow === fast) {
       return true;
     }
   }
   return false;
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
head.next.next.next.next = head.next

console.log(hasCycle(head)) // true pos=1
