module.exports = () => {
    return {
        postcssPlugin: 'postcss-logging-plugin',
        Once(root, { result }) {
            process.stdout.write('\x1Bc')
            console.log('[tailwindcss] compiler started...')
        },
        OnceExit(root, { result }) {
            console.log('[tailwindcss] watching...')
        }
    }
}