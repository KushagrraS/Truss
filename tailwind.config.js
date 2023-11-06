/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/App/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "neutral-100": "#FFFFFF",
      "neutral-200": "#FAFAFA",
      "neutral-300": "#F2F2F2",
      "neutral-400": "#E5E5E5",
      "neutral-500": "#CCCCCC",
      "neutral-600": "#999999",
      "neutral-700": "#666666",
      "neutral-800": "#000000",
      "secondary-300": "#265CF6",
      "error-300": "#FD414D",
      "success-300": "#1FEFA0",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      rigidSquare: ["var(--font-rigidSquare)"],
    },
    screens: {
      xxsm: { min: "300px", max: "380px" },
      // => @media (min-width: 300px and max-width: 380px) { ... }

      xsm: { min: "300px", max: "640px" },
      // => @media (min-width: 300px and max-width: 640px) { ... }

      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1300px" },
      // => @media (min-width: 1024px and max-width: 1349px) { ... }

      xl: { min: "1350px", max: "1650px" },
      // => @media (min-width: 1350px and max-width: 1650px) { ... }

      "2xl": { min: "1651px" },
      // => @media (min-width: 1651px) { ... }
    },
  },
  plugins: [require("tailwindcss-animated")],
});
