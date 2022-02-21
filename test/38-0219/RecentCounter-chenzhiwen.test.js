import RecentCounter from '../../src/38-0219/RecentCounter-chenzhiwen'

describe('test 38-RecentCounter', () => {
  let counter1 = new RecentCounter()

  test('测试返回最近的请求次数', () => {
    expect(counter1.ping(1)).toBe(1)
    expect(counter1.ping(100)).toBe(2)
    expect(counter1.ping(3001)).toBe(3)
    expect(counter1.ping(3002)).toBe(3)
  })

  test('测试对 t 设置边界', () => {
    expect(() => counter1.ping(10**9 + 1)).toThrow()
    expect(() => counter1.ping(10**9 + 2)).toThrow()
  })

  test('测试保证每次对 ping 调用所使用的 t 值都严格递增', () => {
    expect(() => counter1.ping(3000)).toThrow()
  })
})

describe('测试 RecentCounter ping 方法使用次数限制', () => {
  test('测试 ping 方法使用次数限制', () => {
    let counter2 = new RecentCounter()
    for (let i = 1; i <= 10001; i++) {
      if (i < 10001) {
        counter2.ping(i)
      } else {
        expect(() => counter2.ping(i)).toThrow()
      }
    }
  })
})
