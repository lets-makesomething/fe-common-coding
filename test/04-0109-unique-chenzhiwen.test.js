import unique from '../src/04-0109-unique/unique-chenzhiwen'

describe('测试数组去重', () => {
  test('[1, 1, 2, 3] => [1, 2, 3]', () => {
    expect(unique([1, 1, 2, 3])).toEqual([1, 2, 3])
  })
  test('[1, 2, 3, 4] => [1, 2, 3, 4]', () => {
    expect(unique([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
})
