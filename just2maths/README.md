# just2maths

Tiny, well-tested math utilities for JS/TS with strict input validation.

## Install

```bash
pnpm add just2maths
# or
npm i just2maths
# or
yarn add just2maths
```

## Usage

```ts
import { add, divide, clamp, sum, average, nearlyEqual } from 'just2maths';

add(1, 2); // 3
divide(10, 2); // 5
clamp(15, 0, 10); // 10
sum([1, 2, 3]); // 6
average([1, 2, 3]); // 2
nearlyEqual(0.1 + 0.2, 0.3, 1e-10); // true
```

## API

- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)` throws on division by zero
- `clamp(value, min, max)`
- `sum(values: number[])`
- `average(values: number[])` throws on empty array
- `nearlyEqual(a, b, epsilon?)`

All functions validate inputs and throw `TypeError`/`RangeError` for invalid arguments.

## Development

```bash
pnpm i
pnpm test
pnpm build
```

