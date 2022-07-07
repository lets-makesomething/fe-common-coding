import plusOne from "../../src/29-0210/plusOne-chenzhiwen"

describe("plusOne-chenzhiwen", () => {
  test("测试 [1,2,3] 加一", () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4])
  })
  test("测试 [4,3,2,1] 加一", () => {
    expect(plusOne([4,3,2,1])).toEqual([4,3,2,2])
  })
  test("测试 [0] 加一", () => {
    expect(plusOne([0])).toEqual([1])
  })

  test("测试 [9,9,9] 加一", () => {
    expect(plusOne([9,9,9])).toEqual([1,0,0,0])
  })

  test("测试极端情况 [9,9, ..., 9] 100个9 加一", () => {
    expect(plusOne([...new Array(100).fill(9)])).toEqual([...new Array(100).fill(0)])
  })
})
