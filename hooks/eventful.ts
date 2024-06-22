import { Dom } from "OneJS/Dom"
import { VisualElement } from "UnityEngine/UIElements"
import { MutableRef, StateUpdater, useCallback, useEffect, useState } from "preact/hooks"

/**
 * A convenience hook that, like useState(), returns a stateful value and a function to update it.
 * This one ties the value to a property on a C# object.
 * It takes care of setting up and cleaning up the C# value changed event automatically.
 * Refer here for more info: https://onejs.com/docs/uiworkflow#reducing-boilerplates
 *
 * @param obj The C# object containing the property to be observed
 * @param propertyName The name of the property to be observed
 * @param eventName The name of the event to be observed. If not specified, it defaults to "On{propertyName}Changed"
 * @returns
 */
export function useEventfulState<
    T extends { [k in `On${K}Changed`]: OneJS.Event<(value: T[K]) => void> },
    K extends string & keyof T
>(obj: T, propertyName: K): [T[K], StateUpdater<T[K]>]
export function useEventfulState<T, K extends string & keyof T, E extends OneJS.EventKeys<T>>(
    obj: T,
    propertyName: K,
    eventName: E
): [T[K], StateUpdater<T[K]>]
export function useEventfulState<
    T extends { [k in keyof T]: k extends E ? OneJS.Event<(value: T[K]) => void> : any },
    K extends string & keyof T,
    E extends OneJS.EventKeys<T>
>(obj: T, propertyName: K, eventName?: E): [T[K], StateUpdater<T[K]>] {
    // Guarantee the component is re-rendered on changed event,
    //  by ensuring that the state is always updated with a different identity
    //  to handle the case where the object property is an array
    //  and the changed event is raised with the same array instance.
    const [state, setState] = useState({ value: obj?.[propertyName] })
    const setValue = useCallback((value) => setState({ value }), [])

    useEffect(() => {
        if (obj == null) return

        eventName ??= `On${propertyName}Changed` as E
        setValue(obj[propertyName])
        return onejs.subscribe(obj, eventName, setValue as OneJS.EventGenericType<T[E]>)
    }, [obj])

    const setValWrapper = useCallback(
        (v: T[K]) => {
            if (obj == null) return

            obj[propertyName] = v
            // setVal(v) // No need to set the state here in JS. The event handling stuff above will do.
        },
        [obj]
    )

    return [state.value as T[K], setValWrapper]
}