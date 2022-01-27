import rgb2hex from "../../src/23-0128/rgb2hex-chenzhiwen";

describe("测试 rgb 转 hex", () => {
  test("测试是否添加类型守卫", () => {
    expect(() => rgb2hex()).toThrow()
    expect(() => rgb2hex(123)).toThrow()
    expect(() => rgb2hex([9, 10, 255])).toThrow()
  })

  test("测试函数是否会检测 rgb 颜色格式", () => {
    expect(rgb2hex('rgb(9, 10, 256)')).toBe('rgb(9, 10, 256)')
    expect(rgb2hex('rgb(9, 10, 255, 100%)')).toBe('rgb(9, 10, 255, 100%)')
    expect(rgb2hex('rgb(9, 10, 255, 0.5)')).toBe('rgb(9, 10, 255, 0.5)')
  })

  test("测试函数能够将 rgb 转为 hex", () => {
    expect(rgb2hex('rgb(9, 10, 255)')).toBe('#090aff')
  })
})
