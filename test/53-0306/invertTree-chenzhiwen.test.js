import invertTree from '../../src/53-0306/invertTree-chenzhiwen'

describe('test 53 翻转二叉树', () => {
  it('测试根节点为空', () => {
    let root = {
      val: null,
      left: null,
      right: null
    }
    expect(invertTree(root)).toEqual(null)
  })

  it('测试翻转二叉树1', () => {
    let root = {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: {
          val: 3,
          left: null,
          right: null
        }
      },
      right: {
        val: 7,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 9,
          left: null,
          right: null
        }
      }
    }
    let result = {
      val: 4,
      left: {
        val: 7,
        left: {
          val: 9,
          left: null,
          right: null
        },
        right: {
          val: 6,
          left: null,
          right: null
        }
      },
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 1,
          left: null,
          right: null
        }
      }
    }
    expect(invertTree(root)).toEqual(result)
  })

  it('测试翻转二叉树2', () => {
    let root = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    }
    let result = {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
    expect(invertTree(root)).toEqual(result)
  })
})
