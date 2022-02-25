import isPalindrome from "../../src/34-0215/isPalindrome-chenzhiwen"

describe("test 34-isPalindrome", () => {
  test("测试判断 dad", () => {
    expect(isPalindrome("dad")).toBe(true)
  })

  test("测试判断 mmnnmm", () => {
    expect(isPalindrome("mmnnmm")).toBe(true)
  })

  test("测试判断 mmolmm", () => {
    expect(isPalindrome("mmolmm")).toBe(false)
  })
})
