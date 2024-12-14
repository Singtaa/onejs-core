import { Action, Delegate } from "System"


export function subscribe<T, K extends keyof T>(target: T, eventName: K, callback: () => void): () => void
export function subscribe<T, K extends keyof T>(target: { new(): T }, eventName: K, callback: () => void): () => void
export function subscribe(target: any, eventName: any, callback: () => void): () => void {
    var action = new Action(callback)
    target[eventName] = Delegate.Combine(target[eventName] as any, action) as any

    const unsubscribe = () => {
        target[eventName] = Delegate.Remove(target[eventName] as any, action) as any
    }

    onejs.add_onReload(unsubscribe)

    return unsubscribe
}