/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "480px",
        md: "547px",
        lg: "768px",
        xl: "1024px",
        mxl: "1352px",
        xxl: "1680px",
      },
      fontFamily: {
        "space-mono": ["Space"]
      },
    },
  },
  plugins: [],
}