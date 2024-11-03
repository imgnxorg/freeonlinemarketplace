/** @type {import('tailwindcss').Config} */

import colors from "./utilities/palette";

export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        border: {
            outset: "border-style: outset",
        },
        transitionTimingFunction: {
            "ease-through": "cubic-bezier(0,0.42,1,0.58)",
        },
        textShadow: {
            double: "2px 2px 0 color-mix(in srgb, currentColor 20%, transparent)",
            sm: "0 1px 2px color-mix(in srgb, currentColor 20%, transparent)",
            DEFAULT:
                "0 2px 4px color-mix(in srgb, currentColor 20%, transparent)",
            lg: "0 8px 16px color-mix(in srgb, currentColor 20%, transparent)",
        },
        dropShadow: {
            contrast: ["0 0 5px rgba(0, 0, 0, 1)"],
        },
        fontFamily: {
            sans: ["var(--font-geist-sans)"],
            mono: ["var(--font-geist-mono)"],
        },
        borderRadius: {
            "4xl": "2rem",
        },
        animation: {
            "entrance-transition":
                "entrance-transition 1s ease-in-out forwards",
            "spin-low": "spin 3.14159s linear infinite",
            "spin-lower": "spin 60s linear infinite",
            "spin-lowest": "spin 360s linear infinite",
            counterspin: "counterspin 1s linear infinite",
            "counterspin-low": "counterspin 3.14159s linear infinite",
            "counterspin-lower": "counterspin 60s linear infinite",
            "counterspin-lowest": "counterspin 600s linear infinite",
            wiggle: "wiggle 1s ease-in-out infinite",
            heartbeat: "heartbeat 840ms ease-in-out infinite",
            "double-vision-1": "double-vision-1 2s ease-in-out infinite",
            "double-vision-2": "double-vision-2 2s ease-in-out infinite",
            "fade-away": "fade-away 5s ease-in-out forwards",
            bob: "bob 3.333s ease-in-out infinite",
            weave: "weave 3s ease-in-out infinite",
            box: "box 3.333s ease-in-out infinite",
            "spin-offset": "spin-offset 30s linear infinite",
            circle: "circle 5s ease-in-out infinite",
            spiral: "spiral 5s ease-in infinite",
        },
        keyframes: {
            "entrance-transition": {
                "0%": {
                    opacity: 1,
                    transform: "perspective(2000px) translateZ(0px)",
                },
                "100%": {
                    opacity: 0,
                    transform: "perspective(2000px) translateZ(2000px)",
                },
            },
            spiral: {
                "0%": {
                    opacity: 0,
                    transform:
                        "perspective(2000px) rotate(0deg) translate3d(-6%, 6%, 500px)",
                },
                "50%": {
                    opacity: 0.5,
                },
                "100%": {
                    opacity: 0,
                    transform:
                        "perspective(2000px) rotate(360deg) translate3d(-6%, 6%, -2000px)",
                },
            },
            "spin-offset": {
                "0%": {
                    transform: "rotate(0deg) translateX(-50%)",
                },
                "100%": {
                    transform: "rotate(360deg) translateX(-50%)",
                },
            },
            box: {
                "0%, 100%": {
                    transform: "translate3d(-10%, 10%, 0)",
                },
                "25%": {
                    transform: "translate3d(10%, 10%, 0)",
                },
                "50%": {
                    transform: "translate3d(10%, -10%, 0)",
                },
                "75%": {
                    transform: "translate3d(-10%, -10%, 0)",
                },
            },

            "double-vision-1": {
                "0%, 100%": {
                    transform:
                        "perspective(2000px) translate3d(-2%, -2%, -1000px) scale(1)",
                },
                "50%": {
                    transform:
                        "perspective(2000px) translate3d(2%, 2%, 1000px) scale(0.5)",
                },
            },
            "double-vision-2": {
                "0%, 100%": {
                    transform:
                        "perspective(2000px) translate3d(-2%, 2%, 1000px) scale(0.1)",
                },
                "50%": {
                    transform:
                        "perspective(2000px) translate3d(2%, -2%, -75px) scale(1)",
                },
            },
            "fade-away": {
                "0%": { opacity: 1 },
                "100%": { opacity: 0 },
            },
            bob: {
                "0%, 100%": { transform: "translateY(-10%)" },
                "50%": { transform: "translateY(10%)" },
            },
            weave: {
                "0%, 100%": { transform: "translateX(-10%)" },
                "50%": { transform: "translateX(10%)" },
            },
            counterspin: {
                "100%": { transform: "rotate(-360deg)" },
            },
            wiggle: {
                "0%, 100%": { transform: "rotate(-3deg)" },
                "50%": { transform: "rotate(3deg)" },
            },
            heartbeat: {
                "0%, 100%": {
                    transform: "scale(1)",
                    opacity: 0,
                },
                "50%": {
                    transform: "scale(1.1)",
                    opacity: 1,
                },
            },
        },
        colors,
    },
};
export const plugins = [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    function ({ addUtilities }) {
        const newUtilities = {
            ".unselectable": {
                "-webkit-user-select": "none" /* Safari */,
                "-ms-user-select": "none" /* IE 10 and IE 11 */,
                "user-select": "none" /* Standard syntax */,
            },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ matchUtilities, theme }) {
        matchUtilities(
            {
                "text-shadow": (value) => ({
                    textShadow: value,
                }),
            },
            { values: theme("textShadow") },
        );
    },
];
