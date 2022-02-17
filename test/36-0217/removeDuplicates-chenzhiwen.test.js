import removeDuplicates from '../../src/36-0217/removeDuplicates-chenzhiwen'

describe('test 36-removeDuplicates', () => {
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
