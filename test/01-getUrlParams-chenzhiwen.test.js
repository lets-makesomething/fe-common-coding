import getUrlParams from '../src/01-getUrlParams/getUrlParams-chenzhiwen'
import { jest } from '@jest/globals'
/**
 * @jest-environment jsdom
 */
describe('测试获取 url 上的参数值', () => {
  let windowSpy
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get')
    windowSpy.mockImplementation(() => ({
      location: {
        href: 'https://baidu.com?a=1&b=2&c=3',
        search: '?a=1&b=2&c=3'
      }
    }))
  })
  afterEach(() => {
    windowSpy.mockRestore()
  })
  test('获取 a 的值', () => {
    expect(getUrlParams('a')).toBe('1')
  })
  test('获取 b 的值', () => {
    expect(getUrlParams('b')).toBe('2')
  })
  test('获取 c 的值', () => {
    expect(getUrlParams('c')).toBe('3')
  })
})
