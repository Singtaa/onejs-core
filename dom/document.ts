import { Vector2 } from "UnityEngine"
import { DomWrapper } from "./dom"

interface ElementCreationOptions {
    is?: string
}

export class DocumentWrapper {
    public get _doc(): CS.OneJS.Dom.Document { return this.#doc }

    #doc: CS.OneJS.Dom.Document
    #body: DomWrapper | null

    /**
     * The body/root element of the document. Will be null for Editor documents.
     */
    public get body(): DomWrapper | null { return this.#body }

    constructor(doc: CS.OneJS.Dom.Document) {
        this.#doc = doc
        this.#body = doc.body ? new DomWrapper(doc.body) : null
    }

    addRuntimeUSS(uss: string): void {
        this.#doc.addRuntimeUSS(uss)
    }

    clearRuntimeStyleSheets(): void {
        this.#doc.clearRuntimeStyleSheets()
    }

    createElement(tagName: string, options?: ElementCreationOptions): DomWrapper {
        return new DomWrapper(this.#doc.createElement(tagName))
    }

    createElementNS(ns: string, tagName: string, options?: ElementCreationOptions): DomWrapper {
        tagName = typeof tagName === 'string' ? tagName : 'div'
        return new DomWrapper(this.#doc.createElement(tagName))
    }

    createTextNode(text: string): DomWrapper {
        return new DomWrapper(this.#doc.createTextNode(text))
    }

    getElementById(id: string): DomWrapper {
        return new DomWrapper(this.#doc.getElementById(id))
    }

    querySelectorAll(selector: string): DomWrapper[] {
        let doms = this.#doc.querySelectorAll(selector)
        let res = [] as any[]
        for (let i = 0; i < doms.Length; i++) {
            res.push(new DomWrapper(doms.get_Item(i)))
        }
        return res
    }

    elementFromPoint(x: number, y: number): DomWrapper | null {
        const root = this.body
        if (!root) return null

        const hitTest = (node: DomWrapper): DomWrapper | null => {
            if (!node.ve.worldBound.Contains(new Vector2(x, y))) return null

            // later siblings are painted on top → scan from back to front
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
                const hit = hitTest(node.childNodes[i])
                if (hit) return hit
            }
            return node
        }

        return hitTest(root)
    }

    elementsFromPoint(x: number, y: number): DomWrapper[] {
        const root = this.body
        if (!root) return []

        const hits: DomWrapper[] = []

        const collect = (node: DomWrapper): void => {
            if (!node.ve.worldBound.Contains(new Vector2(x, y))) return

            // visit children first, from front to back (last child is top‑most)
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
                collect(node.childNodes[i])
            }

            // add the current node itself
            hits.push(node)
        }

        collect(root)
        return hits // ordered front‑to‑back (top‑most first)
    }
}