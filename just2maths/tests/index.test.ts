import { add, subtract, multiply, divide, clamp, average, sum, nearlyEqual } from '../src/index';

describe('just2maths', () => {
  test('basic arithmetic', () => {
    expect(add(1, 2)).toBe(3);
    expect(subtract(5, 3)).toBe(2);
    expect(multiply(4, 3)).toBe(12);
    expect(divide(10, 2)).toBe(5);
  });

  test('division by zero throws', () => {
    expect(() => divide(10, 0)).toThrow();
  });

  test('type validations', () => {
    expect(() => add('1' as unknown as number, 2)).toThrow(TypeError);
  });

  test('clamp works', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(11, 0, 10)).toBe(10);
    expect(() => clamp(1, 5, 3)).toThrow();
  });

  test('average and sum', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(average([1, 2, 3, 4])).toBe(2.5);
    expect(() => average([])).toThrow();
  });

  test('nearlyEqual', () => {
    expect(nearlyEqual(0.1 + 0.2, 0.3, 1e-10)).toBe(true);
    expect(nearlyEqual(10, 10.000001, 1e-9)).toBe(false);
  });
});

