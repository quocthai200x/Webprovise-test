/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {     
                "wp-gray-f7": "#f7f7f7",
            },
            textColor:{
                'wp-gray-666': '#666666',
            },
            fontSize: {
                'wp-14': '0.875rem',
                'wp-18': '1.125rem',
                'wp-20': '1.25rem',
                'wp-44': '2.75rem',
            },
            lineHeight: {
                'wp-14': '1.026rem',
                'wp-18': '1.318rem',
                'wp-20': '1.465rem',
                'wp-44': '3.223rem',
            },
            boxShadow: {
                'wp-251': '0 1px 1px #00000025',
                'wp-252': '0 2px 2px #00000025',
            },
            borderColor: {
                'wp-96': '#96969630'
            }
            ,
        },
    },

    plugins: [

    ],
}