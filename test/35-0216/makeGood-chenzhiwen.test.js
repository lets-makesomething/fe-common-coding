import makeGood from '../../src/35-0216/makeGood-chenzhiwen'

describe('test 35-makeGood', () => {
  test('测试整理 leEeetcode', () => {
    expect(makeGood('leEeetcode')).toBe('leetcode')
  })

  test('测试整理 abBAcC', () => {
    expect(makeGood('abBAcC')).toBe('')
  })

  test('测试整理 s', () => {
    expect(makeGood('s')).toBe('s')
  })

  test('测试整理空字符串', () => {
    expect(makeGood('')).toBe('')
  })
})
