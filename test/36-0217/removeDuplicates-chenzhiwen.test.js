import removeDuplicates from '../../src/36-0217/removeDuplicates-chenzhiwen'

describe('test 36-removeDuplicates', () => {
  test('测试空字符', () => {
    expect(() => removeDuplicates('')).toThrow()
  })

  test('测试边界判断', () => {
    let overLength = 'a'.repeat(20001)
    expect(() => removeDuplicates(overLength)).toThrow()
  })

  test('测试字符串只能由小写英文字母组成', () => {
    let invalidStr = 'ab1c'
    expect(() => removeDuplicates(invalidStr)).toThrow()
  })

  test('测试整理 abbaca', () => {
    expect(removeDuplicates('abbaca')).toBe('ca')
  })

  test('测试整理 leEeetcode', () => {
    expect(removeDuplicates('leEeetcode')).toBe('leEtcode')
  })

  test('测试整理 huluTV', () => {
    expect(removeDuplicates('huluTV')).toBe('huluTV')
  })
})
