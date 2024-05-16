const { $typeof } = puer

export function getComp<T>(obj: any, type: { new(): T }): T {
    return obj.GetComponent($typeof(type)) as T
}

export function addComp<T>(obj: any, type: { new(): T }): T {
    return obj.AddComponent($typeof(type)) as T
}