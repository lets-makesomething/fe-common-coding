import { dfs, bfs, tree } from '../../src/49-0302/dfs-bfs-chenzhiwen'

describe('test 49-dfs-bfs', () => {
  it('测试深度优先遍历', () => {
    expect(dfs(tree)).toEqual([1, 2, 4, 3, 5])
  })

  it('测试广度优先遍历', () => {
    expect(bfs(tree)).toEqual([[1], [2, 3], [4, 5]])
  })
})
