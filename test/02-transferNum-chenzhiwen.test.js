import transferNum from '../src/02-transferNum/transferNum-chenzhiwen'

describe('测试数字转换带分隔符字符', () => {
  test('123456 => 123,456', () => {
    expect(transferNum(123456)).toBe('123,456')
  })
  test('测试带小数的转换 123456.78901 => 123,456.78901', () => {
    expect(transferNum(123456.78901)).toBe('123,456.78901')
  })
})
