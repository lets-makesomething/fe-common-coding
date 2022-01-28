import { union, intersect } from "../../src/24-0129/union-intersect-chenzhiwen";

describe("测试获取数组并集", () => {
  test("测试是否添加类型守卫", () => {
    expect(() => union()).toThrow()
    expect(() => union('1')).toThrow()
    expect(() => union([])).toThrow()
  })

  test("测试获取并集", () => {
    expect(union([1,2,3,4], [5,6,7,8])).toEqual([1,2,3,4,5,6,7,8])
    expect(union([1,2,3,4], [2,3,4,5])).toEqual([1,2,3,4,2,3,4,5])
  })
})

describe("测试获取数组交集", () => {
  test("测试是否添加类型守卫", () => {
    expect(() => intersect()).toThrow()
    expect(() => intersect('1')).toThrow()
    expect(() => intersect([])).toThrow()
  })

  test("测试获取交集", () => {
    expect(intersect([1,2,3,4], [5,6,7,8])).toEqual([])
    expect(intersect([1,2,3,4], [2,3,4,5])).toEqual([2,3,4])
  })
})
