import getUrlParams from '../src/01-getUrlParams/01-getUrlParams-chenai';
test('getUrlParams-01', () => {
  expect(getUrlParams('https://baidu.com?a=1&b=2&c=3', 'a')).toBe('1');
});
test('getUrlParams-02', () => {
  expect(getUrlParams('https://baidu.com?a=1&b=2&c=3', 'b')).toBe('2');
});
test('getUrlParams-03', () => {
  expect(getUrlParams('https://baidu.com?a=1&b=2&c=3', 'c')).toBe('3');
});
test('getUrlParams-04', () => {
  expect(getUrlParams('https://baidu.com?a=1&b=2&c=3', 'd')).toBe(undefined);
});
test('getUrlParams-05', () => {
  expect(getUrlParams('https://baidu.com', 'd')).toBe(undefined);
});
test('getUrlParams-05', () => {
  expect(getUrlParams(null, [''])).toBe(undefined);
});
