import containsRepeatingLetter from "../../src/21-0126/containsRepeatingLetter-chenzhiwen";

describe("测试检测是否存在连续重复字符", () => {
  test("检测是否有类型守卫", () => {
    expect(() => containsRepeatingLetter()).toThrow()
    expect(() => containsRepeatingLetter(123)).toThrow()
    expect(() => containsRepeatingLetter([])).toThrow()
    expect(() => containsRepeatingLetter(new Date())).toThrow()
    expect(() => containsRepeatingLetter({ a: 1 })).toThrow()
    expect(() => containsRepeatingLetter(true)).toThrow()
    expect(() => containsRepeatingLetter(null)).toThrow()
  })

  test("测试能够检测出连续重复", () => {
    expect(containsRepeatingLetter('abcdeefghhijklmn')).toBe(true)
    expect(containsRepeatingLetter('abba')).toBe(true)
  })

  test("测试函数能否检测没有连续重复的字符串", () => {
    expect(containsRepeatingLetter('abcdefghijklmn')).toBe(false)
  })

  test("测试函数能够检测大小写", () => {
    expect(containsRepeatingLetter('abcDdefg')).toBe(false)
    expect(containsRepeatingLetter('-)?Hh]')).toBe(false)
  })
})
