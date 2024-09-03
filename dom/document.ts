import { DomWrapper } from "./dom"

interface ElementCreationOptions {
    is?: string
}

export class DocumentWrapper {
    #doc: CS.OneJS.Dom.Document;
    #body: DomWrapper;

    public get body(): DomWrapper { return this.#body }

    constructor(doc: CS.OneJS.Dom.Document) {
        this.#doc = doc
        this.#body = new DomWrapper(doc.body)
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
        let res = []
        for (let i = 0; i < doms.Length; i++) {
            res.push(new DomWrapper(doms.get_Item(i)))
        }
        return res;
    }
}