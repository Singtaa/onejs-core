module.exports = () => {
    const screenBreakpoints = {
        'sm': 640,
        'md': 768,
        'lg': 1024,
        'xl': 1280,
        '2xl': 1536,
    };
    return {
        postcssPlugin: 'uss-transform',
        Once(root, { result }) {
            root.walkRules((rule) => {
                // Transform class selectors
                rule.selectors = rule.selectors.map(selector =>
                    selector.replace(/(\\\.|\\#|\\%|\\:|\\\/|\\\[|\\\]|\\\(|\\\)|\\2c|\\&|\\>|\\<|\\\*)/g, match => {
                        switch (match) {
                            case '\\.': return '_d_';
                            case '\\#': return '_n_';
                            case '\\%': return '_p_';
                            case '\\:': return '_c_';
                            case '\\/': return '_s_';
                            case '\\[': return '_lb_';
                            case '\\]': return '_rb_';
                            case '\\(': return '_lp_';
                            case '\\)': return '_rp_';
                            case '\\2c': return '_cm_';
                            case '\\&': return '_amp_';
                            case '\\>': return '_gt_';
                            case '\\<': return '_lt_';
                            case '\\*': return '_ast_';
                            default: return match;
                        }
                    })
                );
            });

            // RGB to RGBA conversion
            root.walkDecls(decl => {
                if (decl.value.includes('rgb(')) {
                    decl.value = decl.value.replace(/rgb\((.*?) \/\s*(.*?)\)/g, 'rgba($1 $2)');
                }
            });

            // Handle hexadecimal colors with alpha value to RGBA conversion
            root.walkDecls(decl => {
                decl.value = decl.value.replace(/#([A-Fa-f0-9]{8})/g, (match, hex) => {
                    const r = parseInt(hex.slice(0, 2), 16);
                    const g = parseInt(hex.slice(2, 4), 16);
                    const b = parseInt(hex.slice(4, 6), 16);
                    const a = parseInt(hex.slice(6, 8), 16) / 255;
                    return `rgba(${r}, ${g}, ${b}, ${a})`;
                });
            });

            // Media queries transformation
            root.walkAtRules('media', atRule => {
                // Extract the min-width value from the media query
                const minWidthMatch = atRule.params.match(/min-width:\s*(\d+)px/);
                if (minWidthMatch) {
                    const minWidthValue = parseInt(minWidthMatch[1], 10);

                    // Determine the correct breakpoint
                    let appliedBreakpointName = null;
                    Object.entries(screenBreakpoints).forEach(([name, value]) => {
                        if (minWidthValue >= value) {
                            appliedBreakpointName = name;
                        }
                    });

                    if (appliedBreakpointName) {
                        const className = `.onejs-media-${appliedBreakpointName}`;

                        // Prepend the class to each rule inside this media query
                        atRule.walkRules(rule => {
                            rule.selectors = rule.selectors.map(selector => `${className} ${selector}`);
                        });

                        // Remove the @media rule by replacing it with its contents
                        atRule.replaceWith(atRule.nodes);
                    }
                }
            });
        }
    };
};

module.exports.postcss = true;
