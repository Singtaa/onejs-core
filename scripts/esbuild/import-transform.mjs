import * as fs from "fs";
import * as path from "path";

/**
 * An esbuild plugin that transforms imports from modules starting with a capital letter.
 * 
 * ## Functionality:
 * 1. **Externalizing Capitalized Module Imports**:
 *    - Marks imports from modules with names starting with a capital letter as external
 *      during the resolution phase.
 * 
 * 2. **Transforming Import Statements**:
 *    - Rewrites ES module import statements to reference a global `CS` object.
 *    - Converts:
 *      ```js
 *      import { Foo, Bar } from "MyModule";
 *      ```
 *      Into:
 *      ```js
 *      const { Foo, Bar } = CS.MyModule;
 *      ```
 *    - If the import is a default import or namespace import:
 *      ```js
 *      import MyModule from "MyModule";
 *      ```
 *      Becomes:
 *      ```js
 *      const MyModule = CS.MyModule;
 *      ```
 * 
 * 3. **Handling `require` Statements**:
 *    - Transforms `__require("MyModule")` into `CS.MyModule`.
 * 
 * ## Parameters:
 * @param {Object} options - Configuration options.
 * @param {Function} [options.moduleFilter] - A filter function that determines if a module should be transformed.
 * 
 * ## Returns:
 * @returns {Object} An esbuild plugin object.
 * 
 * ## Example Usage:
 * 
 * ```js
 * importTransformation({
 *     moduleFilter: (moduleName) => moduleName.startsWith("MyLib")
 * });
 * ```
 * 
 */
export function importTransformationPlugin(options = {}) {
    const moduleFilter = options.moduleFilter || (() => true);
    return {
        name: "onejs-import-transform",
        setup(build) {
            // First pass: Mark imports from modules starting with a capital letter as external
            build.onResolve({ filter: /^[A-Z]/ }, (args) => {
                return { path: args.path, external: true };
            });

            // Second pass: Transform all JS and TSX files
            build.onLoad({ filter: /\.(js|jsx|ts|tsx)$/ }, async (args) => {
                let contents = await fs.promises.readFile(args.path, "utf8");

                // Transform imports from modules starting with a capital letter
                contents = contents.replace(
                    /import\s+(?:{([^}]+)})?\s*from\s*["']([A-Z][^"']*)["'];?/g,
                    (match, imports, moduleName) => {
                        if (!moduleFilter(moduleName))
                            return match;
                        moduleName = moduleName.replace(/\//g, ".");
                        if (imports) {
                            const importItems = imports.split(",").map((item) => item.trim());
                            return `const { ${importItems.join(", ")} } = CS.${moduleName};`;
                        } else {
                            const namespaceName = moduleName.split(".").pop();
                            return `const ${namespaceName} = CS.${moduleName};`;
                        }
                    }
                );

                // Transform any remaining require statements for such modules
                contents = contents.replace(
                    /__require\(["']([A-Z][^"']*)["']\)/g,
                    (match, moduleName) => {
                        if (!moduleFilter(moduleName))
                            return match;
                        return `CS.${moduleName.replace(/\//g, ".")}`;
                    }
                );

                return { contents, loader: path.extname(args.path).slice(1) };
            });
        },
    };
}

/**
 * Keeping for backward-compatibility reasons. Please use `importTransformationPlugin()` instead.
 */
export const importTransformation = importTransformationPlugin;
export const importTransformPlugin = importTransformationPlugin();