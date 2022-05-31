module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography')],
}
