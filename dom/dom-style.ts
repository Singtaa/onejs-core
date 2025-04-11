

export class DomStyleWrapper implements CS.OneJS.Dom.DomStyle {
    _domStyle: CS.OneJS.Dom.DomStyle // Making this public so that Proxy's setProperty can access it

    constructor(domStyle: CS.OneJS.Dom.DomStyle) {
        this._domStyle = domStyle

        return new Proxy(this, {
            set(target, prop, value, receiver) {
                if (typeof prop === 'string' && !(prop in target)) {
                    target.setProperty(prop, value)
                    return true
                }
                return Reflect.set(target, prop, value, receiver)
            },
            get(target, prop, receiver) {
                if (typeof prop === 'string' && !(prop in target)) {
                    return target.getProperty(prop)
                }
                return Reflect.get(target, prop, receiver)
            }
        })
    }

    getProperty(name: string) {
        return this._domStyle.getProperty(name)
    }

    setProperty(name: string, value: any) {
        this._domStyle.setProperty(name, value)
    }
}

export interface DomStyleWrapper extends CS.OneJS.Dom.DomStyle {
    [key: string | symbol]: any;
}