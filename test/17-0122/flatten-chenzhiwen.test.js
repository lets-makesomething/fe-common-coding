import flatten from "../../src/17-0122/flatten-chenzhiwen";

describe("测试将数组降维", () => {
  test("测试是否添加类型守卫", () => {
    expect(flatten).toThrow(TypeError);
  });

  test("3 层嵌套", () => {
    expect(flatten([1, 2, [3, 4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("4 层嵌套", () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("5 层嵌套", () => {
    expect(
      flatten([
        [1, 2],
        [3, 4, [5], [6], [7, [8], [9, [10]]]],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
