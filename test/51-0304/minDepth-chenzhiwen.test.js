import minDepth from '../../src/51-0304/minDepth-chenzhiwen'

describe('测试 51-minDepth', () => {
  it('测试获取根节点为空的二叉树最小深度', () => {
    const root = null
    expect(minDepth(root)).toBe(0)
  })

  it('测试获取只有一个根节点的二叉树最小深度', () => {
    const root = {
      val: 1,
      left: null,
      right: null
    }
    expect(minDepth(root)).toBe(1)
  })

  it('测试获取二叉树最小深度1', () => {
    const root = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null
        },
        right: {
          val: 7,
          left: null,
          right: null
        }
      }
    }
    expect(minDepth(root)).toBe(2)
  })

  it('测试获取二叉树最小深度2', () => {
    const root = {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: {
            val: 5,
            left: null,
            right: {
              val: 6,
              left: null,
              right: null
            }
          }
        }
      }
    }
    expect(minDepth(root)).toBe(5)
  })

  it('测试获取二叉树最小深度3', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null
        },
        right: {
          val: 5,
          left: null,
          right: null
        }
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    }
    expect(minDepth(root)).toBe(2)
  })
})
