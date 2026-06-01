// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand namespace
                hok: {
                    // surfaces
                    surface: "#fff8f3",
                    "surface-dim": "#e8d8c3",
                    "surface-bright": "#fff8f3",
                    "surface-container-lowest": "#ffffff",
                    "surface-container-low": "#fff2e2",
                    "surface-container": "#fcebd6",
                    "surface-container-high": "#f6e6d0",
                    "surface-container-highest": "#f0e0cb",
                    "on-surface": "#221a0d",
                    "on-surface-variant": "#524348",
                    "inverse-surface": "#382f21",
                    "inverse-on-surface": "#ffeed9",
                    outline: "#847378",
                    "outline-variant": "#d6c1c7",
                    "surface-tint": "#8e4767",

                    // roles
                    primary: "#2b0018",
                    "on-primary": "#ffffff",
                    "primary-container": "#4a0e2e",
                    "on-primary-container": "#c57597",
                    "inverse-primary": "#ffb0cf",

                    secondary: "#b22c00",
                    "on-secondary": "#ffffff",
                    "secondary-container": "#fe5e32",
                    "on-secondary-container": "#591100",

                    tertiary: "#2b0300",
                    "on-tertiary": "#ffffff",
                    "tertiary-container": "#4b1206",
                    "on-tertiary-container": "#cd7662",

                    error: "#ba1a1a",
                    "on-error": "#ffffff",
                    "error-container": "#ffdad6",
                    "on-error-container": "#93000a",

                    // fixed tonal palettes
                    "primary-fixed": "#ffd8e5",
                    "primary-fixed-dim": "#ffb0cf",
                    "on-primary-fixed": "#3c0223",
                    "on-primary-fixed-variant": "#72304f",

                    "secondary-fixed": "#ffdbd1",
                    "secondary-fixed-dim": "#ffb5a1",
                    "on-secondary-fixed": "#3b0800",
                    "on-secondary-fixed-variant": "#881f00",

                    "tertiary-fixed": "#ffdad2",
                    "tertiary-fixed-dim": "#ffb4a3",
                    "on-tertiary-fixed": "#3c0701",
                    "on-tertiary-fixed-variant": "#763222",

                    background: "#fff8f3",
                    "on-background": "#221a0d",
                    "surface-variant": "#f0e0cb",
                },
            },

            fontFamily: {
                // load via @import or next/font in your project
                display: ["Playfair Display", "serif"],      // headlines [file:3]
                body: ["Be Vietnam Pro", "system-ui", "sans-serif"], // body & UI [file:3]
            },

            borderRadius: {
                sm: "0.25rem",       // 4px
                DEFAULT: "0.5rem",   // 8px primary radius [file:3]
                md: "0.75rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px",
            },

            spacing: {
                // base scale
                1: "8px",          // if you prefer you can still use tailwind default, but this matches your base
                // semantic tokens (use via e.g. 'mt-[var(--hok-section-gap)]' if you want CSS vars instead)
                "hok-section-gap": "120px",
                "hok-container-margin": "64px",
                "hok-gutter": "24px",
                "hok-safe-area": "32px",
            },

            // optional: custom font sizes matching your tokens
            fontSize: {
                "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "headline-lg": ["48px", { lineHeight: "1.2" }],
                "headline-lg-mobile": ["32px", { lineHeight: "1.2" }],
                "headline-md": ["32px", { lineHeight: "1.3" }],
                "body-lg": ["18px", { lineHeight: "1.6" }],
                "body-md": ["16px", { lineHeight: "1.6" }],
                "label-lg": ["14px", { lineHeight: "1.2", letterSpacing: "0.1em" }],
                "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.05em" }],
            },
        },
    },
    plugins: [],
};