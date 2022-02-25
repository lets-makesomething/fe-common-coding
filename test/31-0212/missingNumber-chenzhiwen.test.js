import missingNumber from "../../src/31-0212/missingNumber-chenzhiwen"

describe("test 31-0212-missingNumber", () => {
  test("测试查找 [3,0,1] 缺失的元素", () => {
    expect(missingNumber([3,0,1])).toBe(2)
  })

  test("测试查找 [0,1] 缺失的元素", () => {
    expect(missingNumber([0,1])).toBe(2)
  })

  test("测试查找 [9,6,4,2,3,5,7,0,1] 缺失的元素", () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8)
  })

  test("测试查找 [0] 缺失的元素", () => {
    expect(missingNumber([0])).toBe(1)
  })
})
