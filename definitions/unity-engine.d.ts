
declare module "UnityEngine" {
    export = CS.UnityEngine;
}

declare module "UnityEngine/UIElements" {
    export = CS.UnityEngine.UIElements;
}

interface TypeRef<T> {
    runtimeType: Function;
}

declare namespace CS {
    namespace UnityEngine.UIElements {
        interface IChangeEvent {
        }

        class ChangeEvent<T> extends UnityEngine.UIElements.EventBase$1<T> implements IChangeEvent, System.IDisposable {
            static GetPooled<T>(): T
            static GetPooled<T>(previousValue: any, newValue: any): ChangeEvent<T>
            previousValue: T
            newValue: T
            constructor()
            Dispose(): void
        }
    }
}