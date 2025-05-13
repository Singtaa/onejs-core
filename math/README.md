# OneJS Math Utilities

Convenience functions for working with vectors, quaternions, matrices, etc.

## Usage Example

```typescript
import { vec3, quat, mul, add } from 'onejs-core/math';

// Create a position vector
const position = vec3(1, 2, 3);

// Create a rotation
const rotation = quat(0, 0, 0, 1);

// Apply rotation to direction vector
const direction = vec3(0, 0, 1);
const rotatedDirection = mul(rotation, direction);

// Move in the rotated direction
const newPosition = add(position, rotatedDirection);
```

## Table of Contents
- [Vector Creation](#vector-creation)
- [Quaternion Creation](#quaternion-creation)
- [Matrix Operations](#matrix-operations)
- [Array Utilities](#array-utilities)
- [Math Operations](#math-operations)
- [Vector Operations](#vector-operations)

## Vector Creation

Create Unity vectors with simplified syntax.

```typescript
// Create Vector2
vec2(x: number, y: number): Vector2

// Create Vector2Int
vec2i(x: number, y: number): Vector2Int

// Create Vector3
vec3(x: number, y: number, z: number): Vector3

// Create Vector3Int
vec3i(x: number, y: number, z: number): Vector3Int

// Create Vector4
vec4(x: number, y: number, z: number, w: number): Vector4
```

## Quaternion Creation

Create and manipulate Unity quaternions.

```typescript
// Create identity quaternion (no args) or specific quaternion (with args)
quat(): Quaternion
quat(x: number, y: number, z: number, w: number): Quaternion

// Create quaternion from Euler angles (in degrees)
euler(x: number, y: number, z: number): Quaternion
```

## Matrix Operations

Create and manipulate 4x4 matrices.

```typescript
// Create identity matrix (no args) or from vectors/array
mat4x4(): Matrix4x4
mat4x4(a: Vector4, b: Vector4, c: Vector4, d: Vector4): Matrix4x4
mat4x4(a: number[][]): Matrix4x4

// Create TRS matrix (translation, rotation, scale)
trs(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4x4
```

## Array Utilities

Create C# arrays from JavaScript values.

```typescript
// Create array of floats
floatArray(...items: number[]): CSArray

// Create array of Vector2
vec2Array(...items: number[][]): CSArray

// Create array of Vector2Int
vec2iArray(...items: number[][]): CSArray

// Create array of Vector3
vec3Array(...items: number[][]): CSArray

// Create array of Vector3Int
vec3iArray(...items: number[][]): CSArray

// Create array of Vector4
vec4Array(...items: number[][]): CSArray
```

## Math Operations

Vector math operations with overloaded support for different types.

### Addition
```typescript
add(a: Vector2, b: Vector2): Vector2
add(a: Vector3, b: Vector3): Vector3
add(a: Vector2Int, b: Vector2Int): Vector2Int
add(a: Vector3Int, b: Vector3Int): Vector3Int
add(a: Vector4, b: Vector4): Vector4
```

### Subtraction
```typescript
sub(a: Vector2, b: Vector2): Vector2
sub(a: Vector3, b: Vector3): Vector3
sub(a: Vector2Int, b: Vector2Int): Vector2Int
sub(a: Vector3Int, b: Vector3Int): Vector3Int
sub(a: Vector4, b: Vector4): Vector4
```

### Negation
```typescript
neg(a: Vector2): Vector2
neg(a: Vector3): Vector3
neg(a: Vector2Int): Vector2Int
neg(a: Vector3Int): Vector3Int
neg(a: Vector4): Vector4
```

### Multiplication
```typescript
// Vector-scalar multiplication
mul(a: Vector2|Vector3|Vector2Int|Vector3Int|Vector4, b: number): same as a
mul(a: number, b: Vector2|Vector3|Vector2Int|Vector3Int|Vector4): same as b

// Quaternion multiplication
mul(a: Quaternion, b: Quaternion): Quaternion
mul(a: Quaternion, b: Vector3): Quaternion

// Matrix multiplication
mul(a: Matrix4x4, b: Matrix4x4): Matrix4x4
mul(a: Matrix4x4, b: Vector3): Quaternion
```

### Division
```typescript
div(a: Vector2, b: number): Vector2
div(a: Vector3, b: number): Vector3
div(a: Vector2Int, b: number): Vector2Int
div(a: Vector3Int, b: number): Vector3Int
```

### Equality
```typescript
eq(a: Vector2, b: Vector2): boolean
eq(a: Vector3, b: Vector3): boolean
eq(a: Vector2Int, b: Vector2Int): boolean
eq(a: Vector3Int, b: Vector3Int): boolean
eq(a: Quaternion, b: Quaternion): boolean
```

## Vector Operations

### Dot Product
```typescript
dot(a: Vector2, b: Vector2): number
dot(a: Vector3, b: Vector3): number
dot(a: Vector4, b: Vector4): number
dot(a: Quaternion, b: Quaternion): number
```

### Clamping
```typescript
// Clamp between min and max
clamp(a: Vector2|Vector3|Vector2Int|Vector3Int|Vector4, 
      min: same as a, 
      max: same as a): same as a

// Clamp between 0 and 1
clamp01(a: Vector2|Vector3|Vector4): same as a
```

### Distance
```typescript
distance(a: Vector2, b: Vector2): number
distance(a: Vector3, b: Vector3): number
distance(a: Vector2Int, b: Vector2Int): number
distance(a: Vector3Int, b: Vector3Int): number
distance(a: Vector4, b: Vector4): number
```

### Normalization
```typescript
normalize(a: Vector2): Vector2
normalize(a: Vector3): Vector3
normalize(a: Vector4): Vector4
```

### Linear Interpolation
```typescript
lerp(a: number, b: number, t: number): number
lerp(a: Vector2, b: Vector2, t: number): Vector2
lerp(a: Vector3, b: Vector3, t: number): Vector3
lerp(a: Vector4, b: Vector4, t: number): Vector4
lerp(a: Quaternion, b: Quaternion, t: number): Quaternion
lerp(a: Color, b: Color, t: number): Color
```
