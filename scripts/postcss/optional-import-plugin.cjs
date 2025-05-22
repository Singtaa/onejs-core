const fs = require("fs")
const path = require("path")
const postcssImport = require("postcss-import")

module.exports = function optionalImportPlugin() {
    const optionalImportMap = new Map()

    return postcssImport({
        resolve(id, basedir) {
            const fullPath = path.resolve(basedir, id)
            if (!fs.existsSync(fullPath)) {
                const fakePath = path.resolve(".optional-imports", id.replace(/[\\/]/g, "_") + ".css")
                optionalImportMap.set(fakePath, "")
                console.warn(`[postcss-import] Skipping: ${id}`)
                return fakePath
            }
            return fullPath
        },
        load(filename) {
            if (optionalImportMap.has(filename)) {
                return "/* optional import skipped */"
            }
            return fs.readFileSync(filename, "utf8")
        }
    })
}
