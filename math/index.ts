import { Matrix4x4, Quaternion, Vector2, Vector2Int, Vector3, Vector3Int, Vector4, Color } from "UnityEngine"

type CSArray = CS.System.Array
const getType = CS.OneJS.Utils.TypeUtil.GetType

const { $typeof } = puer

// MARK: - Vectors

export function vec2(x: number, y: number): Vector2 {
    return new Vector2(x, y);
}

export function vec2i(x: number, y: number): Vector2Int {
    return new Vector2Int(x, y);
}

export function vec3(x: number, y: number, z: number): Vector3 {
    return new Vector3(x, y, z);
}

export function vec3i(x: number, y: number, z: number): Vector3Int {
    return new Vector3Int(x, y, z);
}

export function vec4(x: number, y: number, z: number, w: number): Vector4 {
    return new Vector4(x, y, z, w);
}

// MARK: - Quaternions

export function quat(): Quaternion;
export function quat(x: number, y: number, z: number, w: number): Quaternion;
export function quat(x?: number, y?: number, z?: number, w?: number): Quaternion {
    if (x === undefined && y === undefined && z === undefined && w === undefined) {
        return Quaternion.identity;
    }
    if (x !== undefined && y !== undefined && z !== undefined && w !== undefined) {
        return new Quaternion(x, y, z, w);
    }
    throw new Error("Invalid arguments: either no arguments or exactly four numbers.");
}

export function euler(x: number, y: number, z: number): Quaternion {
    return Quaternion.Euler(x, y, z);
}

// MARK: - Matrices

export function mat4x4(): Matrix4x4
export function mat4x4(a: Vector4, b: Vector4, c: Vector4, d: Vector4): Matrix4x4
export function mat4x4(a: number[][]): Matrix4x4
export function mat4x4(a?: any, b?: any, c?: any, d?: any): Matrix4x4 {
    if (a === undefined && b === undefined && c === undefined && d === undefined) {
        return Matrix4x4.identity;
    }
    if (a instanceof Vector4 && b instanceof Vector4 && c instanceof Vector4 && d instanceof Vector4) {
        return new Matrix4x4(a, b, c, d);
    }
    if (Array.isArray(a) && a.length === 4 && a.every(v => Array.isArray(v) && v.length === 4)) {
        return new Matrix4x4(
            vec4(a[0][0], a[0][1], a[0][2], a[0][3]),
            vec4(a[1][0], a[1][1], a[1][2], a[1][3]),
            vec4(a[2][0], a[2][1], a[2][2], a[2][3]),
            vec4(a[3][0], a[3][1], a[3][2], a[3][3])
        );
    }
    throw new Error("Invalid arguments: either no arguments, four Vector4s or a 4x4 array of numbers.");
}

export function trs(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4x4 {
    return Matrix4x4.TRS(translation, rotation, scale);
}

// MARK: - Arrays

export function floatArray(...items: number[]): CSArray {
    const result = newCsArray(CS.System.Single, items.length);
    for (let i = 0; i < items.length; i++) {
        result.set(i, items[i]);
    }
    return result;
}

export function vec2Array(...items: number[][]): CSArray {
    const result = newCsArray(Vector2, items.length);
    for (let i = 0; i < items.length; i++) {
        result.set(i, vec2(items[i][0], items[i][1]));
    }
    return result;
}

export function vec2iArray(...items: number[][]): CSArray {
    const result = newCsArray(Vector2Int, items.length);
    for (let i = 0; i < items.length; i++) {
        result.set(i, vec2i(items[i][0], items[i][1]));
    }
    return result;
}

export function vec3Array(...items: number[][]): CSArray {
    const result = newCsArray(Vector3, items.length);
    for (let i = 0; i < items.length; i++) {
        result.set(i, vec3(items[i][0], items[i][1], items[i][2]));
    }
    return result;
}

export function vec3iArray(...items: number[][]): CSArray {
    const result = newCsArray(Vector3Int, items.length);
    for (let i = 0; i < items.length; i++) {
        result.set(i, vec3i(items[i][0], items[i][1], items[i][2]));
    }
    return result;
}

export function vec4Array(...items: number[][]): CSArray {
    const result = newCsArray(Vector4, items.length);
    for (let i = 0; i < items.length; i++) {
        result.set(i, vec4(items[i][0], items[i][1], items[i][2], items[i][3]));
    }
    return result;
}

// MARK: - Math Ops

export function add(a: Vector2, b: Vector2): Vector2
export function add(a: Vector3, b: Vector3): Vector3
export function add(a: Vector2Int, b: Vector2Int): Vector2Int
export function add(a: Vector3Int, b: Vector3Int): Vector3Int
export function add(a: Vector4, b: Vector4): Vector4
export function add(a: any, b: any): any {
    function isBothOfType(type: any) {
        return getType(a) == $typeof(type) && getType(b) == $typeof(type);
    }

    if (isBothOfType(Vector2)) {
        return Vector2.op_Addition(a, b);
    } else if (isBothOfType(Vector2Int)) {
        return Vector2Int.op_Addition(a, b);
    } else if (isBothOfType(Vector3)) {
        return Vector3.op_Addition(a, b);
    } else if (isBothOfType(Vector3Int)) {
        return Vector3Int.op_Addition(a, b);
    } else if (isBothOfType(Vector4)) {
        return Vector4.op_Addition(a, b);
    }

    throw new Error("Unsupported types for add operation");
}

export function sub(a: Vector2, b: Vector2): Vector2
export function sub(a: Vector3, b: Vector3): Vector3
export function sub(a: Vector2Int, b: Vector2Int): Vector2Int
export function sub(a: Vector3Int, b: Vector3Int): Vector3Int
export function sub(a: Vector4, b: Vector4): Vector4
export function sub(a: any, b: any): any {
    function isBothOfType(type: any) {
        return getType(a) == $typeof(type) && getType(b) == $typeof(type);
    }

    if (isBothOfType(Vector2)) {
        return Vector2.op_Subtraction(a, b);
    } else if (isBothOfType(Vector2Int)) {
        return Vector2Int.op_Subtraction(a, b);
    } else if (isBothOfType(Vector3)) {
        return Vector3.op_Subtraction(a, b);
    } else if (isBothOfType(Vector3Int)) {
        return Vector3Int.op_Subtraction(a, b);
    } else if (isBothOfType(Vector4)) {
        return Vector4.op_Subtraction(a, b);
    }

    throw new Error("Unsupported types for sub operation");
}

export function neg(a: Vector2): Vector2
export function neg(a: Vector3): Vector3
export function neg(a: Vector2Int): Vector2Int
export function neg(a: Vector3Int): Vector3Int
export function neg(a: Vector4): Vector4
export function neg(a: any): any {
    if (getType(a) == $typeof(Vector2)) {
        return Vector2.op_UnaryNegation(a);
    } else if (getType(a) == $typeof(Vector2Int)) {
        return Vector2Int.op_UnaryNegation(a);
    } else if (getType(a) == $typeof(Vector3)) {
        return Vector3.op_UnaryNegation(a);
    } else if (getType(a) == $typeof(Vector3Int)) {
        return Vector3Int.op_UnaryNegation(a);
    } else if (getType(a) == $typeof(Vector4)) {
        return Vector4.op_UnaryNegation(a);
    }

    throw new Error("Unsupported types for neg operation");
}

export function mul(a: Vector2, b: number): Vector2
export function mul(a: number, b: Vector2): Vector3
export function mul(a: Vector3, b: number): Vector3
export function mul(a: number, b: Vector3): Vector3
export function mul(a: Vector2Int, b: number): Vector2Int
export function mul(a: number, b: Vector2Int): Vector2Int
export function mul(a: Vector3Int, b: number): Vector3Int
export function mul(a: number, b: Vector3Int): Vector3Int
export function mul(a: Vector4, b: number): Vector4
export function mul(a: number, b: Vector4): Vector4
export function mul(a: Quaternion, b: Quaternion): Quaternion
export function mul(a: Quaternion, b: Vector3): Vector3
export function mul(a: Matrix4x4, b: Matrix4x4): Matrix4x4
export function mul(a: Matrix4x4, b: Vector4): Vector4
export function mul(a: any, b: any): any {

    if (isOfType(a, Quaternion) && isOfType(b, Quaternion)) {
        return Quaternion.op_Multiply(a, b);
    }
    if (isOfType(a, Quaternion) && isOfType(b, Vector3)) {
        return Quaternion.op_Multiply(a, b);
    }

    if (isOfType(a, Matrix4x4) && isOfType(b, Matrix4x4)) {
        return Matrix4x4.op_Multiply(a, b);
    }
    if (isOfType(a, Matrix4x4) && isOfType(b, Vector4)) {
        return Matrix4x4.op_Multiply(a, b);
    }

    if (typeof b === 'number') {
        if (getType(a) == $typeof(Vector2)) {
            return Vector2.op_Multiply(a, b);
        } else if (getType(a) == $typeof(Vector2Int)) {
            return Vector2Int.op_Multiply(a, b);
        } else if (getType(a) == $typeof(Vector3)) {
            return Vector3.op_Multiply(a, b);
        } else if (getType(a) == $typeof(Vector3Int)) {
            return Vector3Int.op_Multiply(a, b);
        } else if (getType(a) == $typeof(Vector4)) {
            return Vector4.op_Multiply(a, b);
        }
    }
    else if (typeof a === 'number') {
        if (getType(b) == $typeof(Vector2)) {
            return Vector2.op_Multiply(b, a);
        } else if (getType(b) == $typeof(Vector2Int)) {
            return Vector2Int.op_Multiply(b, a);
        } else if (getType(b) == $typeof(Vector3)) {
            return Vector3.op_Multiply(b, a);
        } else if (getType(b) == $typeof(Vector3Int)) {
            return Vector3Int.op_Multiply(b, a);
        } else if (getType(b) == $typeof(Vector4)) {
            return Vector4.op_Multiply(b, a);
        }
    }

    throw new Error("Unsupported types for mul operation");
}

export function div(a: Vector2, b: number): Vector2
export function div(a: Vector3, b: number): Vector3
export function div(a: Vector2Int, b: number): Vector2Int
export function div(a: Vector3Int, b: number): Vector3Int
export function div(a: any, b: any): any {
    if (typeof b === 'number') {
        if (getType(a) == $typeof(Vector2)) {
            return Vector2.op_Division(a, b);
        } else if (getType(a) == $typeof(Vector2Int)) {
            return Vector2Int.op_Division(a, b);
        } else if (getType(a) == $typeof(Vector3)) {
            return Vector3.op_Division(a, b);
        } else if (getType(a) == $typeof(Vector3Int)) {
            return Vector3Int.op_Division(a, b);
        }
    }

    throw new Error("Unsupported types for div operation");
}

export function eq(a: Vector2, b: Vector2): boolean
export function eq(a: Vector3, b: Vector3): boolean
export function eq(a: Vector2Int, b: Vector2Int): boolean
export function eq(a: Vector3Int, b: Vector3Int): boolean
export function eq(a: Quaternion, b: Quaternion): boolean
export function eq(a: any, b: any): boolean {
    function isBothOfType(type: any) {
        return getType(a) == $typeof(type) && getType(b) == $typeof(type);
    }

    if (isBothOfType(Vector2)) {
        return Vector2.op_Equality(a, b);
    } else if (isBothOfType(Vector2Int)) {
        return Vector2Int.op_Equality(a, b);
    } else if (isBothOfType(Vector3)) {
        return Vector3.op_Equality(a, b);
    } else if (isBothOfType(Vector3Int)) {
        return Vector3Int.op_Equality(a, b);
    } else if (isBothOfType(Quaternion)) {
        return Quaternion.op_Equality(a, b);
    }

    throw new Error("Unsupported types for eq operation");
}

// MARK: - Vector Ops

export function dot(a: Vector2, b: Vector2): number
export function dot(a: Vector3, b: Vector3): number
export function dot(a: Vector4, b: Vector4): number
export function dot(a: Quaternion, b: Quaternion): number
export function dot(a: any, b: any): number {
    function isBothOfType(type: any) {
        return isOfType(a, type) && isOfType(b, type);
    }

    if (isBothOfType(Vector2)) {
        return Vector2.Dot(a, b);
    } else if (isBothOfType(Vector3)) {
        return Vector3.Dot(a, b);
    } else if (isBothOfType(Vector4)) {
        return Vector4.Dot(a, b);
    } else if (isBothOfType(Quaternion)) {
        return Quaternion.Dot(a, b);
    }

    throw new Error("Unsupported types for dot operation");
}

export function clamp(a: Vector2, min: Vector2, max: Vector2): Vector2
export function clamp(a: Vector3, min: Vector3, max: Vector3): Vector3
export function clamp(a: Vector2Int, min: Vector2Int, max: Vector2Int): Vector2Int
export function clamp(a: Vector3Int, min: Vector3Int, max: Vector3Int): Vector3Int
export function clamp(a: Vector4, min: Vector4, max: Vector4): Vector4
export function clamp(a: any, min: any, max: any): any {
    function isAllOfType(type: any) {
        return isOfType(a, type) && isOfType(min, type) && isOfType(max, type);
    }

    if (isAllOfType(Vector2)) {
        return vec2(
            Math.min(Math.max(a.x, min.x), max.x),
            Math.min(Math.max(a.y, min.y), max.y)
        );
    } else if (isAllOfType(Vector3)) {
        return vec3(
            Math.min(Math.max(a.x, min.x), max.x),
            Math.min(Math.max(a.y, min.y), max.y),
            Math.min(Math.max(a.z, min.z), max.z)
        );
    } else if (isAllOfType(Vector2Int)) {
        return vec2i(
            Math.min(Math.max(a.x, min.x), max.x),
            Math.min(Math.max(a.y, min.y), max.y)
        );
    } else if (isAllOfType(Vector3Int)) {
        return vec3i(
            Math.min(Math.max(a.x, min.x), max.x),
            Math.min(Math.max(a.y, min.y), max.y),
            Math.min(Math.max(a.z, min.z), max.z)
        );
    } else if (isAllOfType(Vector4)) {
        return vec4(
            Math.min(Math.max(a.x, min.x), max.x),
            Math.min(Math.max(a.y, min.y), max.y),
            Math.min(Math.max(a.z, min.z), max.z),
            Math.min(Math.max(a.w, min.w), max.w)
        );
    }

    throw new Error("Unsupported types for clamp operation");
}

export function clamp01(a: Vector2): Vector2
export function clamp01(a: Vector3): Vector3
export function clamp01(a: Vector4): Vector4
export function clamp01(a: any): any {
    if (isOfType(a, Vector2)) {
        return vec2(
            Math.min(Math.max(a.x, 0), 1),
            Math.min(Math.max(a.y, 0), 1)
        );
    } else if (isOfType(a, Vector3)) {
        return vec3(
            Math.min(Math.max(a.x, 0), 1),
            Math.min(Math.max(a.y, 0), 1),
            Math.min(Math.max(a.z, 0), 1)
        );
    } else if (isOfType(a, Vector4)) {
        return vec4(
            Math.min(Math.max(a.x, 0), 1),
            Math.min(Math.max(a.y, 0), 1),
            Math.min(Math.max(a.z, 0), 1),
            Math.min(Math.max(a.w, 0), 1)
        );
    }

    throw new Error("Unsupported types for clamp01 operation");
}

export function distance(a: Vector2, b: Vector2): number
export function distance(a: Vector3, b: Vector3): number
export function distance(a: Vector2Int, b: Vector2Int): number
export function distance(a: Vector3Int, b: Vector3Int): number
export function distance(a: Vector4, b: Vector4): number
export function distance(a: any, b: any): number {
    function isBothOfType(type: any) {
        return isOfType(a, type) && isOfType(b, type);
    }

    if (isBothOfType(Vector2)) {
        return Vector2.Distance(a, b);
    } else if (isBothOfType(Vector3)) {
        return Vector3.Distance(a, b);
    } else if (isBothOfType(Vector2Int)) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    } else if (isBothOfType(Vector3Int)) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    } else if (isBothOfType(Vector4)) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const dw = a.w - b.w;
        return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    }

    throw new Error("Unsupported types for distance operation");
}

export function normalize(a: Vector2): Vector2
export function normalize(a: Vector3): Vector3
export function normalize(a: Vector4): Vector4
export function normalize(a: any): any {
    if (isOfType(a, Vector2)) {
        const magnitude = Math.sqrt(a.x * a.x + a.y * a.y);
        if (magnitude < 1e-6) {
            return vec2(0, 0);
        }
        return vec2(a.x / magnitude, a.y / magnitude);
    } else if (isOfType(a, Vector3)) {
        return Vector3.Normalize(a);
    } else if (isOfType(a, Vector4)) {
        return Vector4.Normalize(a);
    }

    throw new Error("Unsupported types for normalize operation");
}

export function lerp(a: number, b: number, t: number): number
export function lerp(a: Vector2, b: Vector2, t: number): Vector2
export function lerp(a: Vector3, b: Vector3, t: number): Vector3
export function lerp(a: Vector4, b: Vector4, t: number): Vector4
export function lerp(a: Quaternion, b: Quaternion, t: number): Quaternion
export function lerp(a: Color, b: Color, t: number): Color
export function lerp(a: any, b: any, t: number): any {
    function isBothOfType(type: any) {
        return isOfType(a, type) && isOfType(b, type);
    }

    if (typeof a === 'number' && typeof b === 'number') {
        return a + (b - a) * t;
    } else if (isBothOfType(Vector2)) {
        return Vector2.Lerp(a, b, t);
    } else if (isBothOfType(Vector3)) {
        return Vector3.Lerp(a, b, t);
    } else if (isBothOfType(Vector4)) {
        return vec4(
            a.x + (b.x - a.x) * t,
            a.y + (b.y - a.y) * t,
            a.z + (b.z - a.z) * t,
            a.w + (b.w - a.w) * t
        );
    } else if (isBothOfType(Quaternion)) {
        return Quaternion.Lerp(a, b, t);
    } else if (isBothOfType(Color)) {
        return Color.Lerp(a, b, t);
    }

    throw new Error("Unsupported types for lerp operation");
}

// MARK: - Utilities

function isOfType(obj: any, type: any) {
    return getType(obj) == $typeof(type);
}