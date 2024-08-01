

export class DomStyleWrapper implements CS.OneJS.Dom.DomStyle {
    #domStyle: CS.OneJS.Dom.DomStyle

    constructor(domStyle: CS.OneJS.Dom.DomStyle) {
        this.#domStyle = domStyle

        return new Proxy(this, {
            set(target, prop, value) {
                target.setProperty(prop as string, value);
                return true;
            },
            get(target, prop) {
                return target[prop];
            }
        })
    }

    setProperty(name: string, value: any) {
        this.#domStyle.setProperty(name, value)
    }
}

export interface DomStyleWrapper extends CS.OneJS.Dom.DomStyle { }