import * as fs from "fs";
import * as path from "path";

export const importTransformPlugin = {
	name: "onejs-import-transform",
	setup(build) {
		// First pass: Mark C# imports as external
		build.onResolve({ filter: /^(UnityEngine|OneJS)/ }, (args) => {
			return { path: args.path, external: true };
		});

		// Second pass: Transform all JS and TSX files
		build.onLoad({ filter: /\.(js|jsx|ts|tsx)$/ }, async (args) => {
			let contents = await fs.promises.readFile(args.path, "utf8");

			// Transform Unity imports
			contents = contents.replace(
				/import\s+(?:{([^}]+)})?\s*from\s*["'](UnityEngine[^"']*|OneJS[^"']*)["'];?/g,
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

			// Transform any remaining require statements for Unity modules
			contents = contents.replace(
				/__require\(["'](UnityEngine[^"']*|OneJS[^"']*)["']\)/g,
				(match, moduleName) => {
					return `CS.${moduleName.replace(/\//g, ".")}`;
				}
			);

			return { contents, loader: path.extname(args.path).slice(1) };
		});
	},
};

export const watchOutputPlugin = {
	name: "onejs-watch-output",
	setup(build) {
		build.onStart(() => {
			// Clear the terminal
			process.stdout.write('\x1Bc');
			console.log("[esbuild] starting build...");
		});

		build.onEnd((result) => {
			// if (result.errors.length > 0) {
			//     console.error("[esbuild] build failed");
			// } else {
			//     console.log("[esbuild] build succeeded");
			// }
			console.log("[esbuild] watching...");
		});
	}
}