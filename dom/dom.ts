import { DomStyleWrapper } from "./dom-style"

export class DomWrapper {
    public get _dom(): CS.OneJS.Dom.Dom { return this.#dom }
    public get ve(): CS.UnityEngine.UIElements.VisualElement { return this.#dom.ve }
    public get childNodes(): DomWrapper[] { return (this.#dom.childNodes as any as CS.OneJS.Dom.Dom[]).map((child) => new DomWrapper(child)) }
    public get firstChild(): DomWrapper | null {
        return this.#dom.firstChild ? new DomWrapper(this.#dom.firstChild) : null;
    }
    public get parentNode(): DomWrapper | null {
        return this.#dom.parentNode ? new DomWrapper(this.#dom.parentNode) : null;
    }
    public get nextSibling(): DomWrapper | null {
        return this.#dom.nextSibling ? new DomWrapper(this.#dom.nextSibling) : null;
    }

    public get nodeType(): number { return this.#dom.nodeType }
    public get Id(): string { return this.#dom.Id }
    public set Id(value: string) { this.#dom.Id = value }
    public get key(): string { return this.#dom.key }
    public set key(value: string) { this.#dom.key = value }
    public get style(): DomStyleWrapper { return this.#domStyleWrapper }
    public get value(): any { return this.#dom.value }
    public get checked(): boolean { return this.#dom.checked }
    public get data(): any { return this.#dom.data }
    public set data(value: any) { this.#dom.data = value }

    public get classname(): string { return this.#dom.classname }
    public set classname(value: string) { this.#dom.classname = value }

    #dom: CS.OneJS.Dom.Dom
    #domStyleWrapper: DomStyleWrapper

    constructor(dom: CS.OneJS.Dom.Dom) {
        this.#dom = dom
        this.#domStyleWrapper = new DomStyleWrapper(dom.style)
    }

    appendChild(child: DomWrapper) {
        this.#dom.appendChild(child.#dom)
    }

    removeChild(child: DomWrapper) {
        this.#dom.removeChild(child.#dom)
    }

    insertBefore(a: DomWrapper, b: DomWrapper) {
        this.#dom.insertBefore(a?._dom, b?._dom)
    }

    contains(child: DomWrapper) {
        return this.#dom.contains(child._dom)
    }

    clearChildren() {
        this.#dom.clearChildren()
    }

    focus() {
        this.#dom.focus()
    }

    addEventListener(type: string, listener: (event: Event) => void, useCapture?: boolean) {
        // @ts-ignore
        this.#dom.addEventListener(type, listener.bind(this), useCapture)
    }

    removeEventListener(type: string, listener: (event: Event) => void, useCapture?: boolean) {
        // @ts-ignore
        this.#dom.removeEventListener(type, listener.bind(this), useCapture)
    }

    setAttribute(name: string, value: any) {
        this.#dom.setAttribute(name, value)
    }

    removeAttribute(name: string) {
        this.#dom.removeAttribute(name)
    }
}