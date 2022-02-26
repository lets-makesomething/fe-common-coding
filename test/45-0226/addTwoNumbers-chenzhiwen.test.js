import addTwoNumbers from '../../src/45-0226/addTwoNumbers-chenzhiwen'

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

describe('test 45-addTwoNumbers', () => {
  test('测试链表相加合并1', () => {
    let list1 = arr2List([2, 4, 3])
    let list2 = arr2List([5, 6, 4])
    let result = arr2List([7, 0, 8])
    expect(addTwoNumbers(list1, list2)).toEqual(result)
  })

  test('测试链表相加合并2', () => {
    let list1 = arr2List([0])
    let list2 = arr2List([0])
    let result = arr2List([0])
    expect(addTwoNumbers(list1, list2)).toEqual(result)
  })

  test('测试链表相加合并3', () => {
    let list1 = arr2List([9, 9, 9, 9, 9, 9, 9])
    let list2 = arr2List([9, 9, 9, 9])
    let result = arr2List([8, 9, 9, 9, 0, 0, 0, 1])
    expect(addTwoNumbers(list1, list2)).toEqual(result)
  })
})
