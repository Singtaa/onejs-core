
declare namespace CS.UnityEngine {
    interface GameObject {
        GetComp<T>(type: { new(): T }): T
        AddComp<T>(type: { new(): T }): T
    }

    interface Component {
        GetComp<T>(type: { new(): T }): T
        AddComp<T>(type: { new(): T }): T
    }
}

type CSArray = CS.System.Array

declare namespace CS.System {
    interface Array {
        get<T>(index: number): T
        set<T>(index: number, value: T): void
        toJsArray<T>(): T[]
        at<T>(index: number): T
        forEach<T>(callbackfn: (value: T, index: number, array: CSArray) => void): void
        map<T, U>(type: { new(...args: any[]): U }, callbackfn: (value: T, index: number, array: CSArray) => U): CSArray
        filter<T>(callbackfn: (value: T, index: number, array: CSArray) => boolean): CSArray
        reduce<T>(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: CSArray) => T): T
        reduceRight<T>(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: CSArray) => T): T
        find<T>(predicate: (value: T, index: number, array: CSArray) => boolean): T
        findIndex<T>(predicate: (value: T, index: number, array: CSArray) => boolean): number
        indexOf<T>(searchElement: T, fromIndex?: number): number
        lastIndexOf<T>(searchElement: T, fromIndex?: number): number
        some<T>(callbackfn: (value: T, index: number, array: CSArray) => boolean): boolean
        every<T>(callbackfn: (value: T, index: number, array: CSArray) => boolean): boolean
        slice<T>(start?: number, end?: number): CSArray
        concat<T>(...items: CSArray[]): T[]
        join(separator?: string): string
        sort<T>(compareFn?: (a: T, b: T) => number): CSArray
        reverse(): CSArray
        includes<T>(searchElement: T, fromIndex?: number): boolean
        fill<T>(value: T, start?: number, end?: number): CSArray
        copyWithin<T>(target: number, start: number, end?: number): CSArray
    }
}