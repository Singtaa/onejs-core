export function outputWatcherPlugin(options = {}) {
	return {
		name: "onejs-watch-output",
		setup(build) {
			build.onStart(() => {
				// Clear the terminal
				process.stdout.write('\x1Bc');
				console.log("[esbuild] starting build...");
			});

			build.onEnd((result) => {
				console.log("[esbuild] watching...");
			});
		}
	}
}

/**
 * Keeping this one for backward-compatibility reasons. Please use `outputWatcherPlugin` instead.
 */
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