import maxDepth from '../../src/52-0305/maxDepth-chenzhiwen'

describe('test 52-maxDepth', () => {
  it('测试二叉树为空', () => {
    expect(maxDepth(null)).toEqual(0)
  })

  it('测试二叉树为单节点', () => {
    let root = {
      val: 1,
      left: null,
      right: null
    }
    expect(maxDepth(root)).toEqual(1)
  })

  it('测试二叉树获取最大深度1', () => {
    let root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        val: 4,
        left: {
          val: 5,
          left: null,
          right: null
        },
        right: null
      }
    }
    expect(maxDepth(root)).toEqual(3)
  })

  it('测试获取二叉树最大深度2', () => {
    let root = {
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
    expect(maxDepth(root)).toEqual(3)
  })
})
