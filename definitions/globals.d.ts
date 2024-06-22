declare namespace OneJS {
    class Event<F extends Function> {
        // Must have at least an unique member, because an empty class behaves like `any`
        #Invoke(...args: any): any
    }

    type EventKeys<T> = { [k in keyof T]-?: T[k] extends Event<any> ? k : never }[keyof T]

    type EventGenericType<T> = T extends Event<infer F> ? F : never
}

declare const onejs: {
    add_onReload(handler: () => void): void
    remove_onReload(handler: () => void): void
    add_onDestroy(handler: () => void): void
    remove_onDestroy(handler: () => void): void

    interop: { // TODO
        classes: Record<string, any>
        objects: Record<string, any>
    }

    subscribe<T, K extends OneJS.EventKeys<T>>(
        eventSource: T,
        eventName: K,
        handler: OneJS.EventGenericType<T[K]>
    ): () => void

    subscribe(eventName: string, handler: () => void): () => void
}