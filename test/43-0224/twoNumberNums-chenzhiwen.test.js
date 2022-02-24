import twoSum from '../../src/43-0224/twoNumberNums-chenzhiwen'

describe('test 43-twoNumberNums', () => {
  test('测试找到和为目标值的两个元素的下标', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})
