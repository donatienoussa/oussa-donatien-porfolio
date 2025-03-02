/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    
    /* Tailwind will scan those files for searching classes */
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    /* The dark mode is activated */
    darkMode: "class",

    /* The theme configuration.  */
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                neutral: 'var(--color-neutral)',
                'background-light': 'var(--color-background-light)',
                'background-dark': 'var(--color-background-dark)',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                poppins: ['var(--font-poppins)', 'serif'],
            },
            fontSize: {
                h1: 'var(--font-size-h1)',
                h2: 'var(--font-size-h2)',
                h3: 'var(--font-size-h3)',
                base: 'var(--font-size-base)',
            },
            spacing: {
                4: 'var(--spacing-4)',
                6: 'var(--spacing-6)',
            },
            borderRadius: {
                lg: 'var(--border-radius-lg)',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
};