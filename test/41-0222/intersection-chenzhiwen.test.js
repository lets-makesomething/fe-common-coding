import intersection from '../../src/41-0222/intersection-chenzhiwen'

describe('test 41-intersection', () => {
  test('判断空数组', () => {
    expect(intersection([], [])).toEqual([])
  })
  
  test('测试求交集', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2])
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
  })
})
