import backspaceCompare from '../../src/37-0218/backspaceCompare-chenzhiwen'

describe('test 37-backspaceCompare', () => {
  test('测试输入字符边界检测', () => {
    let s = Array(201).fill('a').join('')
    let t = '##d'
    expect(() => backspaceCompare(s, t)).toThrow()
  })

  test('测试输入字符包含大写字母', () => {
    let s = 'ab#cC'
    let t = 'ad#c'
    expect(() => backspaceCompare(s, t)).toThrow()
  })

  test('测试判断输入字符是否相等', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true)
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true)
    expect(backspaceCompare('a#c', 'b')).toBe(false)
  })
})
