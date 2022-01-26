import multiply from "../../src/22-0127/multiply-chenzhiwen";

describe("测试乘法", () => {
  test("测试是否添加类型守卫", () => {
    expect(() => multiply()).toThrow()
    expect(() => multiply('1', '1')).toThrow()
    expect(() => multiply(NaN, 1)).toThrow()
    expect(() => multiply({}, 1)).toThrow()
  })

  test("测试整数乘法", () => {
    expect(multiply(4, 5)).toBe(20)
    expect(multiply(100, 123)).toBe(12300)
    expect(multiply(1e+2, 6e+9)).toBe(600000000000)
  })

  test("测试小数乘法", () => {
    expect(multiply(0.1, 0.5)).toBe(0.05)
    expect(multiply(0.006, 0.005)).toBe(0.00003)
    expect(multiply(12.32, 7)).toBe(86.24)
    expect(multiply(1e-2, 6e-3)).toBe(0.00006)
  })
})
