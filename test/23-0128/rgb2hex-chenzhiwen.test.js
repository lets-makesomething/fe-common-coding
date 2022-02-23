import rgb2hex, { rgbs2hex } from "../../src/23-0128/rgb2hex-chenzhiwen";

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

  // 拓展
  test("测试 rgbs2hex 转换函数是否工作正常", () => {
    expect(rgbs2hex('rgb(255,0,153)')).toBe('#ff0099')
    expect(rgbs2hex('rgb(255, 0, 153.0)')).toBe('#ff0099')
    expect(rgbs2hex('rgb(9,   10   ,      255)')).toBe('#090aff')
    expect(rgbs2hex('rgb(  9,   10   ,      255  )')).toBe('#090aff')
    expect(rgbs2hex('rgb(100%,0%,60%)')).toBe('#ff0099')
    expect(rgbs2hex('rgb(100% 0% 60%)')).toBe('#ff0099')
    expect(rgbs2hex('rgb(  100%   0%      60%  )')).toBe('#ff0099')
    expect(rgbs2hex('rgb(255 0 153)')).toBe('#ff0099')
    expect(rgbs2hex('rgb(  255    0      153  )')).toBe('#ff0099')
    expect(rgbs2hex('rgb(  255    0      153.3)')).toBe('#ff0099')
    // 测试不规范输入
    expect(rgbs2hex('rgb(255,0,153,)')).toBe('rgb(255,0,153,)')
    expect(rgbs2hex('rgb(  100%   0%      60%,  )')).toBe('rgb(  100%   0%      60%,  )')
    expect(rgbs2hex('rgb(100%,0,60%)')).toBe('rgb(100%,0,60%)')
    expect(rgbs2hex('rgb(  255    0 ,     153.3)')).toBe('rgb(  255    0 ,     153.3)')
  })
})
