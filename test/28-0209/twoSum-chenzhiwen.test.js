import twoSum from "../../src/28-0209/twoSum-chenzhiwen"

describe("twoSum-chenzhiwen", () => {
  test("测试获取数组中两数相加等于目标值的元素下标", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})
