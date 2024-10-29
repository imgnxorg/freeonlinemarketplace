/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        // typography: {
        //     DEFAULT: {
        //         // this is for prose class
        //         css: {
        //             //   color: theme('colors.mauve'), // change global color scheme
        //             p: {
        //                 fontSize: '14px', // key can be in camelCase...
        //                 'text-align': 'center', // or as it is in css (but in quotes).
        //             },
        //             // a: {
        //             //     // change anchor color and on hover
        //             //     color: '#03989E',
        //             //     '&:hover': {
        //             //         // could be any. It's like extending css selector
        //             //         color: '#F7941E',
        //             //     },
        //             // },
        //             // ul: {
        //             //     '> li': {
        //             //         '&::before': {
        //             //             // more complex example - add before to an li element.
        //             //             content: '',
        //             //         },
        //             //     },
        //             // },
        //         },
        //     },
        //     sm: {
        //         // and this is for prose-sm.
        //         css: {},
        //     },
        // },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')({
            className: 'wysiwyg',
        }),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
