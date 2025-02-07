const math = require('./math');

describe('Math operations', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(math.add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(math.subtract(5, 3)).toBe(2);
    });

    test('multiplies 4 * 3 to equal 12', () => {
        expect(math.multiply(4, 3)).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(math.divide(10, 2)).toBe(5);
    });

    test('division by zero throws error', () => {
        expect(() => math.divide(10, 0)).toThrow();
    });

    test('handles negative numbers in addition', () => {
        expect(math.add(-1, -2)).toBe(-3);
    });

    test('handles decimal numbers in multiplication', () => {
        expect(math.multiply(2.5, 2)).toBe(5);
    });
});