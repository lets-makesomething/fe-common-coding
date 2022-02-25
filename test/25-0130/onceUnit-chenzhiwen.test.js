import onceUnit from "../../src/25-0130/onceUnit-chenzhiwen"

describe("测试查找元素只出现一次的函数", () => {
  test("测试是否对参数数组进行校验", () => {
    expect(() => onceUnit([4, 1, 2, 1, 2, 4])).toThrow()
  })

  test("测试查找函数能够找到只出现一次的元素", () => {
    expect(onceUnit([4, 1, 2, 1, 2])).toBe(4)
    expect(onceUnit([1, 1, 2])).toBe(2)
  })
})
