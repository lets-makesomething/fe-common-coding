import lengthOfLongestSubstring from '../../src/44-0225/lengthOfLongestSubstring-chenzhiwen'

describe('test 44-lengthOfLongestSubstring', () => {
  test('测试类型检测', () => {
    expect(() => lengthOfLongestSubstring(123)).toThrow()
  })

  test('测试获取不重复最长子串长度', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
  })
})
