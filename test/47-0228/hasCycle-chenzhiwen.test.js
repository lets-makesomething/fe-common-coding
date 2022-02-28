import hasCycle from '../../src/47-0228/hasCycle-chenzhiwen'

function ListNode(val) {
  this.val = val
  this.next = null
}

function arr2List(arr, pos) {
  let redirect = null
  let head = new ListNode(arr[0])
  let cur = head
  if (pos === 0) {
    redirect = head
  }
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
    if (i === pos) {
      redirect = cur
    }
    if (i === arr.length - 1) {
      cur.next = redirect
    }
  }
  return head
}

describe('test 47-hasCycle', () => {
  it('1', () => {
    let head = arr2List([3, 2, 0, -4], 1)
    expect(hasCycle(head)).toBe(true)
  })
  it('2', () => {
    let head = arr2List([1, 2], 0)
    expect(hasCycle(head)).toBe(true)
  })
  it('3', () => {
    let head = arr2List([1], -1)
    expect(hasCycle(head)).toBe(false)
  })
})
