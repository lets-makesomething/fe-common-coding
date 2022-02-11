import merge from "../../src/30-0211/merge-chenzhiwen"

describe("test 30-0211-merge", () => {
  test("测试数组融合1", () => {
    let arr1 = [-3,-2,1,2,3,0,0,0,0,0]
    let arr2 = [-4,4,5,6,7]
    merge(arr1,5,arr2,5)
    expect(arr1).toEqual([-4,-3,-2,1,2,3,4,5,6,7])
  })

  test("测试数组融合2", () => {
    let arr1 = [1,2,3,0,0,0]
    let arr2 = [2,5,6]
    merge(arr1, 3, arr2, 3)
    expect(arr1).toEqual([1,2,2,3,5,6])
  })

  test("测试数组融合第二个数组为空", () => {
    let arr1 = [1]
    let arr2 = []
    merge(arr1, 1, arr2, 0)
    expect(arr1).toEqual([1])
  })

  test("测试数组融合第一个数组第一部分为空", () => {
    let arr1 = [0]
    let arr2 = [1]
    merge(arr1, 0, arr2, 1)
    expect(arr1).toEqual([1])
  })
})
