import { DomWrapper } from "./dom"

interface ElementCreationOptions {
    is?: string
}

export class DocumentWrapper {
    public get _doc(): CS.OneJS.Dom.Document { return this.#doc }

    #doc: CS.OneJS.Dom.Document;
    #body: DomWrapper | null;

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
        return res;
    }
}