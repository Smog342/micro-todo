/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#2564cf",
        "header-hover": "#215aba",
        "white-bg": "#faf9f8",
      },
      fontFamily: {
        "micro-font": ["Segoe", "'Segoe UI'", "Arial", "sans-serif"],
      },
      screens: {
        "sc-1010": "1010px",
        "sc-920": "920px",
        "sc-910": { max: "910px" },
        "sc-910-min": "910px",
      },
      boxShadow: {
        "sider-shadow":
          "0px 0.3px 0.9px rgba(0,0,0,0.1), 0px 1.6px 3.6px rgba(0,0,0,0.1)",
        "right-sider-shadow":
          "0px 1.2px 3.6px rgba(0,0,0,0.1) 0px 6.4px 14.4px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
