module.exports = (async () => {
    const { default: withMDX } = await import('@next/mdx')
    const { default: remarkMath } = await import('remark-math')
    const { default: rehypeKatex } = await import('rehype-katex')

    /** @type {import('next').NextConfig} */
    const nextConfig = withMDX({
        extension: /\.mdx?$/,
        options: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        },
    })({
        reactStrictMode: true,
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    })

    return nextConfig
})()
