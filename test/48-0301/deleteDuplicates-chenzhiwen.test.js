import deleteDuplicates from '../../src/48-0301/deleteDuplicates-chenzhiwen'

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

describe('test 48-deleteDuplicates', () => {
  test('测试去除 [1,1,2] 重复节点', () => {
    let head = arr2List([1, 1, 2])
    let res = deleteDuplicates(head)
    expect(res).toEqual(arr2List([1, 2]))
  })

  test('测试去除 [1,1,2,3,3] 重复节点', () => {
    let head = arr2List([1, 1, 2, 3, 3])
    let res = deleteDuplicates(head)
    expect(res).toEqual(arr2List([1, 2, 3]))
  })

  test('测试去除 [1,1,2,3,3,4,4,5] 重复节点', () => {
    let head = arr2List([1, 1, 2, 3, 3, 4, 4, 5])
    let res = deleteDuplicates(head)
    expect(res).toEqual(arr2List([1, 2, 3, 4, 5]))
  })
})
