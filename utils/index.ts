/// <reference path="../definitions/index.d.ts" />
/**
 * @module utils
 * 
 * This module contains some commonly-used utility functions.
 */

// @ts-ignore - prevent `allowImportingTsExtensions` error
export { parseColor, parseCSSColor, colorStrToF4, namedColor, namedColors } from "./color-parser"
// @ts-ignore - prevent `allowImportingTsExtensions` error
export { palettes } from "./color-palettes"
// @ts-ignore - prevent `allowImportingTsExtensions` error
export { parseFloat2, parseFloat3, parseFloat4 } from "./float-parser"
export { subscribe } from "./subscribe"
export { toJsArray } from "./arrays"
export { logSystemInfo } from "./system"