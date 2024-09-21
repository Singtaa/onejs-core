declare global {

    // interface ElementCreationOptions {
    //     is?: string
    // }

    // interface Document {
    //     addRuntimeUSS(uss: string): void
    //     clearRuntimeStyleSheets(): void

    //     createElement(tagName: string, options?: ElementCreationOptions): Element
    //     createElementNS(ns: string, tagName: string, options?: ElementCreationOptions): Element
    //     createTextNode(text: string): Element
    // }

    // interface Element {
    //     classname: string
    //     nodeType: number
    //     ve: CS.UnityEngine.UIElements.VisualElement
    // }

    interface HTMLElement {
        style: CS.OneJS.Dom.DomStyle
    }

    const document: Document
    const setTimeout: (callback: () => void, delay?: number) => number
    const clearTimeout: (id: number) => void
    const setInterval: (callback: () => void, delay?: number) => number
    const clearInterval: (id: number) => void
    const requestAnimationFrame: (callback: (time: number) => void) => number
    const cancelAnimationFrame: (id: number) => void

    const console: {
        log: (...args: any[]) => void
        error: (...args: any[]) => void
        warn: (...args: any[]) => void
        info: (...args: any[]) => void
        debug: (...args: any[]) => void
    }

    interface Event {
        type: string
    }
    interface Text {
        data: string
        nodeType: number
    }
}

declare module "UnityEngine" {
    class PhysicsMaterial extends PhysicMaterial { }
}

export { }