import flatten from "css-flatten"
import generateComponentId from "./utils/generateComponentId"

const _pastCompIds = new Set<string>()

export function hashAndAddRuntimeUSS(style: string) {
    let compId = generateComponentId(style)
    if (_pastCompIds.has(compId))
        return compId
    style = `.${compId} {${style}}`
    style = flatten(style)
    document.addRuntimeUSS(style)
    _pastCompIds.add(compId)

    return compId
}

/**
 * Similar to the Emotion api, this function takes a template string and returns
 * a class name that can be used to style an element.
 * @param strings
 * @param values
 * @returns
 */
export const emo = function (strings: TemplateStringsArray, ...values: any[]): string {
    let style = values.reduce((result, expr, index) => {
        const value = expr
        return result + (value ? value : "") + strings[index + 1]
    }, strings[0])

    return hashAndAddRuntimeUSS(style)
}