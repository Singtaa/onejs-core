import * as fs from "fs";
import * as path from "path";

export const importTransformPlugin = {
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
                    return `CS.${moduleName.replace(/\//g, ".")}`;
                }
            );

            return { contents, loader: path.extname(args.path).slice(1) };
        });
    },
};
