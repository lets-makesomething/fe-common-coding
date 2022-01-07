import transferNum from '../src/02-transferNum/02-transferNum-chenai';
test('transferNum-01', () => {
  expect(transferNum(123456)).toBe('123,456');
});
test('transferNum-02', () => {
  expect(transferNum(1234567)).toBe('1,234,567');
});
test('transferNum-03', () => {
  expect(transferNum(12345678)).toBe('12,345,678');
});
test('transferNum-04', () => {
  expect(transferNum('1234240')).toBe(undefined);
});
