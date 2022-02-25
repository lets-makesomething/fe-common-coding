import isValid from '../../src/42-0223/isValid-chenzhiwen'

describe('test 42-isValid', () => {
  test('测试 "[[(()"', () => {
    expect(isValid('[[(()')).toBe(false)
  })

  test('测试 "[({})]"', () => {
    expect(isValid('[({})]')).toBe(true)
  })
})
