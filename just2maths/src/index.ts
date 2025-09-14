export function assertNumber(value: unknown, name: string): asserts value is number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a valid number`);
  }
}

export function add(a: number, b: number): number {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a + b;
}

export function subtract(a: number, b: number): number {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a - b;
}

export function multiply(a: number, b: number): number {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a * b;
}

export function divide(a: number, b: number): number {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  if (b === 0) {
    throw new RangeError('Division by zero is not allowed');
  }
  return a / b;
}

export function clamp(value: number, min: number, max: number): number {
  assertNumber(value, 'value');
  assertNumber(min, 'min');
  assertNumber(max, 'max');
  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }
  return Math.min(Math.max(value, min), max);
}

export function average(values: number[]): number {
  if (!Array.isArray(values) || values.length === 0) {
    throw new RangeError('values must be a non-empty array');
  }
  let sum = 0;
  for (const v of values) {
    assertNumber(v, 'values[i]');
    sum += v;
  }
  return sum / values.length;
}

export function sum(values: number[]): number {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  let total = 0;
  for (const v of values) {
    assertNumber(v, 'values[i]');
    total += v;
  }
  return total;
}

export function nearlyEqual(a: number, b: number, epsilon = Number.EPSILON * 4): boolean {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  assertNumber(epsilon, 'epsilon');
  return Math.abs(a - b) <= epsilon * Math.max(1, Math.abs(a), Math.abs(b));
}

