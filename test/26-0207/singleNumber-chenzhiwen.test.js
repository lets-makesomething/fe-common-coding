import singleNumber from "../../src/26-0207/singleNumber-chenzhiwen"

describe("测试查找元素只出现一次的函数", () => {
  test("测试查找函数能够找到只出现一次的元素", () => {
    expect(singleNumber([1,1,2])).toBe(2)
    expect(singleNumber([4,1,2,1,2])).toBe(4)
  })
})
