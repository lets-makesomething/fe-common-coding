import fibonacci from "../../src/19-0124/fibonacci-chenzhiwen";

const fibArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

describe("判断能够返回正确的斐波那契数", () => {
  test("测试 fibonacci 函数是否添加类型守卫", () => {
    expect(() => fibonacci()).toThrow()
    expect(() => fibonacci('')).toThrow(TypeError)
    expect(() => fibonacci({ a: 1 })).toThrow(TypeError)
    expect(() => fibonacci(NaN)).toThrow(Error)
    expect(() => fibonacci([])).toThrow(TypeError)
    expect(() => fibonacci(new Date())).toThrow(TypeError)
    expect(() => fibonacci(new Set())).toThrow(TypeError)
    expect(() => fibonacci(2.3)).toThrow(Error)
  })

  fibArr.forEach((num, index) => {
    test(`测试 fibonacci 函数能够返回第 ${index} 个斐波那契数`, () => {
      expect(fibonacci(index)).toBe(num)
    })
  })
})
