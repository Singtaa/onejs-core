/// <reference path="./definitions/index.d.ts" />
import { DocumentWrapper } from "./dom/document"
import { DomWrapper } from "./dom/dom"

/**
 * OneJS's own h function. Use this to quickly create elements in jsx-like syntax
 * @param type
 * @param props
 * @param children
 * @returns
 */
export function h(type: any, props: any, ...children: any[]): any {
    const element = typeof type === "string" ? document.createElement(type) : type

    // Assign properties to the element
    for (const [key, value] of Object.entries(props || {})) {
        if (key.startsWith("on") && typeof value === "function") {
            element.addEventListener(key.substring(2).toLowerCase(), value)
        } else if (key === "style" && typeof value === "object") {
            Object.assign(element.style, value)
        } else {
            element.setAttribute(key, value)
        }
    }

    // Append children
    for (const child of children) {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child))
        } else {
            element.appendChild(child)
        }
    }

    return element
}

export { emo } from "./styling/index"

declare global {
    interface Document extends DocumentWrapper { }
    interface Element extends DomWrapper {

    }
    const newCsArray: <T>(type: { new(...args: any[]): T }, count: number) => CS.System.Array
    const toJsArray: <T>(csArr: CS.System.Array) => T[]
}

if (typeof globalThis.___document != "undefined") {
    // @ts-ignore
    globalThis.onejsDocument = new DocumentWrapper(globalThis.___document)
    if (!globalThis.ONEJS_WEBGL) {
        // @ts-ignore
        globalThis.document = globalThis.onejsDocument
    }
}

// puer.$extension(CS.UnityEngine.UIElements.VisualElement, CS.UnityEngine.UIElements.VisualElementExtensions)