/**
 * postcss-cleanup-plugin
 *
 * A PostCSS plugin that removes unwanted CSS rules and declarations based on the `remove` array in options.
 *
 * Usage example:
 *
 * ```js
 *   plugins: [
 *     require('./postcss-cleanup-plugin')({
 *       remove: [
 *         ".someClass",    // Remove rules containing this class
 *         "line-height:",  // Remove any line-height property
 *         "display: grid"  // Remove only display property if value is grid
 *       ]
 *     })
 *   ]
 * ```
 *
 * How it works:
 *   1) Entries beginning with "." (e.g. ".foo") cause removal of entire rules containing that class.
 *   2) Entries ending with ":" but no value (e.g. "prop:") remove any declaration with the property "prop".
 *   3) Entries with both property and value (e.g. "prop: value") remove only those exact prop-value declarations.
 *
 */
module.exports = (opts = {}) => {
    const removeEntries = opts.remove || [];
  
    // We'll gather them into 3 buckets:
    const classesToRemove = new Set();
    const propertiesToRemoveCompletely = new Set();   // e.g. "line-height:"
    const propertyValuePairsToRemove = [];            // e.g. "display: grid"
  
    removeEntries.forEach(entry => {
      // 1) If entry starts with ".", assume it's a class to remove
      if (entry.startsWith('.')) {
        classesToRemove.add(entry.slice(1)); // remove leading dot
        return;
      }
  
      // 2) Otherwise, see if there's a ":" for a property
      const parts = entry.split(':').map(s => s.trim());
      if (parts.length === 2) {
        const [prop, value] = parts;
        // If there's no value after the colon => remove that property entirely
        if (!value) {
          propertiesToRemoveCompletely.add(prop);
        } else {
          propertyValuePairsToRemove.push({ prop, value });
        }
      }
    });
  
    return {
      postcssPlugin: 'postcss-cleanup-plugin',
      Once(root, { result }) {
        root.walkRules(rule => {
          // If ANY selector contains an unwanted class, remove the entire rule
          if (
            rule.selectors.some(sel =>
              [...classesToRemove].some(cls => sel.includes(`.${cls}`))
            )
          ) {
            rule.remove();
            return;
          }
  
          // Otherwise, remove targeted declarations
          rule.walkDecls(decl => {
            // If the property is in the "remove completely" set, drop it
            if (propertiesToRemoveCompletely.has(decl.prop)) {
              decl.remove();
              return;
            }
  
            // If it matches one of the prop-value pairs, drop it
            for (const { prop, value } of propertyValuePairsToRemove) {
              if (decl.prop === prop && decl.value === value) {
                decl.remove();
                return;
              }
            }
          });
        });
      }
    };
  };
  
  module.exports.postcss = true;
  