import reverseList from '../../src/46-0227/reserveList-chenzhiwen'

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function arr2List(arr) {
  let head = new ListNode(arr[0])
  let cur = head
  for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i])
      cur = cur.next
  }
  return head
}

describe('test 46-reverseList', () => {
  test('测试反转链表1', () => {
    let list1 = arr2List([1,2,3,4,5])
    let result = arr2List([5,4,3,2,1])
    expect(reverseList(list1)).toEqual(result)
  })

  test('测试反转链表2', () => {
    let list1 = arr2List([1,2])
    let result = arr2List([2,1])
    expect(reverseList(list1)).toEqual(result)
  })

  test('测试反转链表3', () => {
    let list1 = arr2List([])
    let result = arr2List([])
    expect(reverseList(list1)).toEqual(result)
  })
})
