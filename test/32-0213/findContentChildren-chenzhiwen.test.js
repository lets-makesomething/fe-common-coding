import findContentChildren from "../../src/32-0213/findContentChildren-chenzhiwen"

describe("test 32-0213-findContentChildren", () => {
  test("测试小孩是 [1,2,3] 饼干是 [1,1]", () => {
    expect(findContentChildren([1,2,3], [1,1])).toBe(1)
  })

  test("测试小孩是 [1,2] 饼干是 [1,2,3]", () => {
    expect(findContentChildren([1,2], [1,2,3])).toBe(2)
  })
})
