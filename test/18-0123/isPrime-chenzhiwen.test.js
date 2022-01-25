import isPrime from "../../src/18-0123/isPrime-chenzhiwen";

let primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

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
