const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

let theme = rem2px(defaultTheme)
theme.extend = {
    transitionTimingFunction: {
        DEFAULT: "ease-in-out",
        "in-out": "ease-in-out",
    }
}
exports.theme = theme

exports.paths = []

exports.plugins = [
    plugin(function ({ addUtilities, matchUtilities, theme }) {
        addUtilities({
            ".bg-crop": {
                "-unity-background-scale-mode": "scale-and-crop",
            },
            ".bg-fit": {
                "-unity-background-scale-mode": "scale-to-fit",
            },
            ".bg-fill": {
                "-unity-background-scale-mode": "scale-to-fill",
            },
            ".font-normal": {
                "-unity-font-style": "normal",
            },
            ".bold": {
                "-unity-font-style": "bold",
            },
            ".italic": {
                "-unity-font-style": "italic",
            },
            ".bold-italic": {
                "-unity-font-style": "bold-and-italic",
            },
            ".transition-none": { "transition-property": "none" },
            ".transition-all": {
                "transition-property": "all",
                "transition-duration": "150ms",
            },
            ".transition": {
                "transition-property": "color, background-color, border-color, opacity",
                "transition-duration": "150ms",
            },
            ".transition-colors": {
                "transition-property": "color, background-color, border-color",
                "transition-duration": "150ms",
            },
            ".transition-opacity": {
                "transition-property": "opacity",
                "transition-duration": "150ms",
            },
            ".duration-0": { "transition-duration": "0s" },
            ".duration-75": { "transition-duration": "75ms" },
            ".duration-100": { "transition-duration": "100ms" },
            ".duration-150": { "transition-duration": "150ms" },
            ".duration-200": { "transition-duration": "200ms" },
            ".duration-300": { "transition-duration": "300ms" },
            ".duration-500": { "transition-duration": "500ms" },
            ".duration-700": { "transition-duration": "700ms" },
            ".duration-1000": { "transition-duration": "1000ms" },
            ".ease-in": { "transition-timing-function": "ease-in" },
            ".ease-out": { "transition-timing-function": "ease-out" },
            ".ease-in-out": { "transition-timing-function": "ease-in-out" },
            ".ease-linear": { "transition-timing-function": "linear" },
            ".ease-in-sine": { "transition-timing-function": "ease-in-sine" },
            ".ease-out-sine": { "transition-timing-function": "ease-out-sine" },
            ".ease-in-out-sine": { "transition-timing-function": "ease-in-out-sine" },
            ".ease-in-cubic": { "transition-timing-function": "ease-in-cubic" },
            ".ease-out-cubic": { "transition-timing-function": "ease-out-cubic" },
            ".ease-in-out-cubic": { "transition-timing-function": "ease-in-out-cubic" },
            ".ease-in-circ": { "transition-timing-function": "ease-in-circ" },
            ".ease-out-circ": { "transition-timing-function": "ease-out-circ" },
            ".ease-in-out-circ": { "transition-timing-function": "ease-in-out-circ" },
            ".ease-in-elastic": { "transition-timing-function": "ease-in-elastic" },
            ".ease-out-elastic": { "transition-timing-function": "ease-out-elastic" },
            ".ease-in-out-elastic": { "transition-timing-function": "ease-in-out-elastic" },
            ".ease-in-back": { "transition-timing-function": "ease-in-back" },
            ".ease-out-back": { "transition-timing-function": "ease-out-back" },
            ".ease-in-out-back": { "transition-timing-function": "ease-in-out-back" },
            ".ease-in-bounce": { "transition-timing-function": "ease-in-bounce" },
            ".ease-out-bounce": { "transition-timing-function": "ease-out-bounce" },
            ".ease-in-out-bounce": { "transition-timing-function": "ease-in-out-bounce" },
            ".delay-0": { "transition-delay": "0s" },
            ".delay-75": { "transition-delay": "75ms" },
            ".delay-100": { "transition-delay": "100ms" },
            ".delay-150": { "transition-delay": "150ms" },
            ".delay-200": { "transition-delay": "200ms" },
            ".delay-300": { "transition-delay": "300ms" },
            ".delay-500": { "transition-delay": "500ms" },
            ".delay-700": { "transition-delay": "700ms" },
            ".delay-1000": { "transition-delay": "1000ms" },
            ".scale-none": { scale: "none" },
            ".rotate-none": { rotate: "none" },
            ".text-left": { "-unity-text-align": "middle-left" },
            ".text-center": { "-unity-text-align": "middle-center" },
            ".text-right": { "-unity-text-align": "middle-right" },
            ".text-upper-left": { "-unity-text-align": "upper-left" },
            ".text-upper-center": { "-unity-text-align": "upper-center" },
            ".text-upper-right": { "-unity-text-align": "upper-right" },
            ".text-lower-left": { "-unity-text-align": "lower-left" },
            ".text-lower-center": { "-unity-text-align": "lower-center" },
            ".text-lower-right": { "-unity-text-align": "lower-right" },
        })

        matchUtilities({
            fontdef: (value) => ({ "-unity-font-definition": `url("${value}")` }),
        }, {})

        // matchUtilities(
        //     {
        //         text: (value) => ({ "-unity-text-align": value }), // This will conflict with text colors, etc
        //     },
        //     {
        //         values: {
        //             left: "middle-left",
        //             center: "middle-center",
        //             right: "middle-right",
        //             "upper-left": "upper-left",
        //             "upper-center": "upper-center",
        //             "upper-right": "upper-right",
        //             "lower-left": "lower-left",
        //             "lower-center": "lower-center",
        //             "lower-right": "lower-right",
        //         },
        //     }
        // )

        matchUtilities(
            {
                duration: (value) => ({ "transition-duration": value }),
            },
            {
                supportsNegativeValues: false,
                values: theme("duration"),
            }
        )

        matchUtilities(
            {
                translate: (value) => ({ translate: value }),
                "translate-x": (value) => ({ translate: `${value} 0` }),
                "translate-y": (value) => ({ translate: `0 ${value}` }),
            },
            {
                supportsNegativeValues: true,
                values: theme("translate"),
            }
        )

        matchUtilities(
            {
                scale: (value) => ({ scale: value }),
                "scale-x": (value) => ({ scale: `${value} 1` }),
                "scale-y": (value) => ({ scale: `1 ${value}` }),
            },
            {
                supportsNegativeValues: true,
                values: theme("scale"),
            }
        )

        matchUtilities(
            {
                rotate: (value) => ({ rotate: value }),
            },
            {
                supportsNegativeValues: true,
                values: theme("rotate"),
            }
        )

        matchUtilities(
            {
                inset: (value) => ({
                    top: value,
                    bottom: value,
                    left: value,
                    right: value,
                }),
            },
            {
                supportsNegativeValues: true,
                values: theme("inset"),
            }
        )
    }),
]

// USS cannot support dynamic custom properties within rgb()
// which is what is used by Tailwind for opacity scales
// Ref: https://tailwindcss.com/docs/configuration#core-plugins
exports.corePlugins = [
    "alignContent", "alignItems", "alignSelf",
    "justifyContent",
    "backgroundColor", "backgroundImage", "backgroundPosition", "backgroundRepeat", "backgroundSize",
    "borderColor", "borderRadius", "borderWidth",
    "colors", "textColor", "cursor",
    "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap",
    "fontFamily", "fontSize", "fontStyle",
    "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight",
    "margin", "padding",
    "opacity", "overflow", "display", "visibility",
    "position", "inset"
]

/**
 * Utilities
 */

// rem is not supported in USS
function rem2px(input, fontSize = 16) {
    if (input == null) {
        return input
    }
    switch (typeof input) {
        case "object":
            if (Array.isArray(input)) {
                return input.map((val) => rem2px(val, fontSize))
            }
            const ret = {}
            for (const key in input) {
                ret[key] = rem2px(input[key], fontSize)
            }
            return ret
        case "string":
            return input.replace(/(\d*\.?\d+)rem$/, (_, val) => `${parseFloat(val) * fontSize}px`)
        case "function":
            return eval(input.toString().replace(/(\d*\.?\d+)rem/g, (_, val) => `${parseFloat(val) * fontSize}px`))
        default:
            return input
    }
}
