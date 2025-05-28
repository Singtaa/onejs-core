const postcss = require('postcss')
const selectorParser = require('postcss-selector-parser')

module.exports = postcss.plugin('postcss-unwrap-is', () => {
    return (root) => {
        root.walkRules(rule => {
            rule.selector = selectorParser(selectors => {
                selectors.walkPseudos(pseudo => {
                    if (pseudo.value === ':is') {
                        // replace the entire :is(...) with its contents
                        pseudo.replaceWith(...pseudo.nodes)
                    }
                })
            }).processSync(rule.selector)
        })
    }
})