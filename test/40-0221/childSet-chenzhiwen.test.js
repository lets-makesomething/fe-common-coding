import isChildSet from '../../src/40-0221/childSet-chenzhiwen'

describe('test 40-childSet', () => {
  test('类型检测', () => {
    expect(() => isChildSet(1, 2)).toThrow(TypeError)
    expect(() => isChildSet([1, 2], 2)).toThrow(TypeError)
    expect(() => isChildSet(2, [1, 2])).toThrow(TypeError)
  })

  test('测试是否是子集', () => {
    expect(isChildSet([1, 2], [1, 2, 3])).toBe(true)
    expect(isChildSet([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isChildSet([1, 2, 3], [1, 2])).toBe(false)
    expect(isChildSet([1, 2, 3], [1, 2, 3, 4])).toBe(true)
  })
})
