import fs from 'fs'

export function decoratorFixPlugin(options = {}) {
    const outfile = options.outfile || "@outputs/esbuild/app.js"
    return {
        name: "decorator-fix-plugin",
        setup(build) {
            build.onEnd(() => {
                let content = fs.readFileSync(outfile, "utf8")
                content = content.replace(
                    /exports\s*&&\s*exports\.__decorate/g,
                    'typeof exports !== "undefined" && exports.__decorate'
                )
                fs.writeFileSync(outfile, content, "utf8")
            })
        }
    }
}