import isValid from "../../src/33-0214/isValid-chenzhiwen"

describe("test 33-0214-isValid", () => {
  test("测试 ()", () => {
    expect(isValid("()")).toBe(true)
  })

  test("测试 ()[]{}", () => {
    expect(isValid("()[]{}")).toBe(true)
  })

  test("测试 (]", () => {
    expect(isValid("(]")).toBe(false)
  })

  test("测试 ([)]", () => {
    expect(isValid("([)]")).toBe(false)
  })

  test("测试 {[]}", () => {
    expect(isValid("{[]}")).toBe(true)
  })
})
