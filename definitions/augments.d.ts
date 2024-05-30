declare global {
    interface Document {
        addRuntimeUSS(uss: string): void
    }

    interface Element {
        classname: string
        ve: CS.UnityEngine.UIElements.VisualElement
    }

    interface HTMLElement {
        style: CS.OneJS.Dom.DomStyle
    }
}

export { }