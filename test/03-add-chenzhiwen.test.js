import add from '../src/03-add/add-chenzhiwen'

describe('测试柯里化加法函数', () => {
  test('add(1, 2) to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })
  test('add(1)(2) to equal 3', () => {
    expect(add(1)(2)).toBe(3)
  })
})
