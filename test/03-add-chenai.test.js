import add from '../src/03-add/03-add-chenai';
test('add-01', () => {
  expect(add(1, 2)).toBe(3);
});
test('add-02', () => {
  expect(add(1)(2)).toBe(3);
});