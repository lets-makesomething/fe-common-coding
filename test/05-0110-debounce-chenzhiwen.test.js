import debounce from '../src/05-0110/debounce-chenzhiwen'
import { jest } from '@jest/globals'

describe('测试防抖函数', () => {
  jest.useFakeTimers()

  // test('测试 lodash 对定时器的防抖优化', () => {
  //   const test = jest.fn()
  //   const debounced = debounce(test, 1000)

  //   debounced()
  //   debounced()

  //   jest.runAllTimers()

  //   expect(test).toHaveBeenCalledTimes(1)
  // })

  test('测试防抖优化后的执行次数和最终值', () => {
    const test = jest.fn()
    const debounced = debounce(test, 10)
    
    debounced(1)
    debounced(2)

    setTimeout(() => {
      const calls = test.mock.calls
      expect(calls.length).toBe(1)
      expect(calls[0][0]).toBe(2)
    }, 50)
  })
})
