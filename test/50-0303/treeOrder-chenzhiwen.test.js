import {
  bt,
  preOrderTraversal,
  inOrderTraversal,
  postOrderTraversal,
} from '../../src/50-0303/treeOrder-chenzhiwen.js'

describe('测试 50-treeOrder', () => {
  it('测试前序遍历', () => {
    expect(preOrderTraversal(bt)).toEqual([1, 2, 4, 5, 3, 6, 7])
  })

  it('测试中序遍历', () => {
    expect(inOrderTraversal(bt)).toEqual([4, 2, 5, 1, 6, 3, 7])
  })

  it('测试后序遍历', () => {
    expect(postOrderTraversal(bt)).toEqual([4, 5, 2, 6, 7, 3, 1])
  })
})
