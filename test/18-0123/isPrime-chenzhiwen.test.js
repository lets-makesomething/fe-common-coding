import isPrime from "../../src/18-0123/isPrime-chenzhiwen";
import primeList from "./primeList"

describe("判断输入的数字是否为质数", () => {
  test("判断是否添加类型守卫", () => {
    let testList = ['123', 'str', { a: '123' }, false, new Date(), [], null, undefined]
    expect.assertions(8)

    testList.forEach(item => {
      try {
        isPrime(item)
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError)
      }
    })
  })

  test("判断 NaN 是否为质数", () => {
    expect(isPrime(NaN)).toBe(false)
  })

  test("判断 -2 是否为质数", () => {
    expect(isPrime(-2)).toBe(false)
  })

  test("判断 -1 是否为质数", () => {
    expect(isPrime(-1)).toBe(false)
  })

  test("判断 0 是否为质数", () => {
    expect(isPrime(0)).toBe(false)
  })

  test("判断 1 是否为质数", () => {
    expect(isPrime(1)).toBe(false)
  })

  test("判断小数 2.2 是否为质数", () => {
    expect(isPrime(2.2)).toBe(false)
  })

  test("判断 2.000 是否为质数", () => {
    expect(isPrime(2.00)).toBe(true)
  })

  test("判断小数 2.00000000000000000001 是否为质数", () => {
    expect(isPrime(2.00000000000000000001)).toBe(true)
  })

  primeList.forEach(num => {
    test(`isPrime 可以推断质数表中的 ${num}`, () => {
      expect(isPrime(num)).toBe(true)
    })
  })
})
