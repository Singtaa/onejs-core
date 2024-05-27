

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