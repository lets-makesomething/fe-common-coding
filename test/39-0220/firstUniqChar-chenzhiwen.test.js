import firstUniqChar from '../../src/39-0220/firstUniqChar-chenzhiwen'

describe('测试 39-firstUniqChar', () => {
  test('参数类型检测', () => {
    expect(() => firstUniqChar(123)).toThrow()
    expect(() => firstUniqChar([])).toThrow()
  })

  test('参数长度检测', () => {
    let str = 'm'.repeat(10**5 + 1)
    expect(() => firstUniqChar(str)).toThrow()
  })

  test('参数检测只包含小写字母', () => {
    expect(() => firstUniqChar('LeetCode')).toThrow()
    expect(() => firstUniqChar('ui123u')).toThrow()
  })

  test('测试查找首个唯一字符', () => {
    expect(firstUniqChar('leetcode')).toBe(0)
    expect(firstUniqChar('loveleetcode')).toBe(2)
    expect(firstUniqChar('aabb')).toBe(-1)
  })
})
