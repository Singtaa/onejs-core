type Instance<T> = T extends new (...a: any) => infer I ? I : never

type EventNames<T> = {
    [K in keyof T]:
    K extends `add_${infer E}`
    ? `remove_${E}` extends keyof T ? E : never
    : never
}[keyof T]

type Handler<T, E extends string> =
    `add_${E}` extends keyof T
    ? T[`add_${E}`] extends (arg: infer A) => any
    ? A
    : never
    : never

declare const onejs: {
    add_onReload(handler: () => void): void
    remove_onReload(handler: () => void): void
    add_onDispose(handler: () => void): void
    remove_onDispose(handler: () => void): void

    // interop: { // TODO
    //     classes: Record<string, any>
    //     objects: Record<string, any>
    // }

    subscribe<T, K extends EventNames<T>>(
        eventSource: T,
        eventName: K,
        handler: Function
    ): CS.System.Action

    subscribe<
        C extends new (...a: any) => any,
        I extends Instance<C>,
        E extends EventNames<I>
    >(
        eventSource: C,
        eventName: E,
        handler: Function
    ): CS.System.Action

    subscribe(eventName: string, handler: () => void): CS.System.Action

    teardown(action: CS.System.Action): void
}

declare function require(name: string): any

declare const resource: CS.OneJS.Resource
declare const ___workingDir: string