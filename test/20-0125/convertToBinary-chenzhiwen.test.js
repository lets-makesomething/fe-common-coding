import convertToBinary from "../../src/20-0125/convertToBinary-chenzhiwen"

describe("测试转换为8位二进制数字字符", () => {
  // 测试类型守卫
  test("测试是否添加类型守卫", () => {
    expect(() => convertToBinary('123')).toThrow()
    expect(() => convertToBinary([])).toThrow()
    expect(() => convertToBinary(1.23)).toThrow()
    expect(() => convertToBinary(NaN)).toThrow()
  })
  // 测试范围
  test("测试是否限定参数范围", () => {
    expect(() => convertToBinary(128)).toThrow()
    expect(() => convertToBinary(-129)).toThrow()
  })

  test("测试对 -0 的转换", () => {
    expect(convertToBinary(-0)).toBe("00000000")
  })

  test("测试非负整数转换", () => {
    expect(convertToBinary(1)).toBe("00000001")
    expect(convertToBinary(127)).toBe("01111111")
  })

  test("测试负整数转换", () => {
    expect(convertToBinary(-1)).toBe("11111111")
    expect(convertToBinary(-128)).toBe("10000000")
  })
})
