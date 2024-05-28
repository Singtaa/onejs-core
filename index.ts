/// <reference path="./definitions/app.d.ts" />
/// <reference path="./definitions/onejs.d.ts" />
/// <reference path="./definitions/globals.d.ts" />
/// <reference path="./definitions/jsx.d.ts" />
/// <reference path="./definitions/puerts.d.ts" />
/// <reference path="./definitions/unity.d.ts" />
/// <reference path="./definitions/unity-engine.d.ts" />
/// <reference path="./definitions/proto-overrides.d.ts" />

// Typings here are used to avoid conflict with user-generated app.d.ts

// declare namespace CS.OneJS.Dom {
//     interface Dom {

//     }
// }

declare var document: any

// OneJS's own h function. Use this to quickly create elements in jsx-like syntax
export function h(type: any, props: any, ...children: any[]): any {
    const element = typeof type === "string" ? document.createElement(type) : type;

    // Assign properties to the element
    for (const [key, value] of Object.entries(props || {})) {
        if (key.startsWith("on") && typeof value === "function") {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else if (key === "style" && typeof value === "object") {
            Object.assign(element.style, value);
        } else {
            element.setAttribute(key, value);
        }
    }

    // Append children
    for (const child of children) {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    }

    return element;
}