/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all your React component files
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(94.67deg, #8019B0 0%, #42307D 100%)",
        "primary-gradient": "#42307D",
      },
      colors: {
        primary: "#42307D",
        "primary-text": "#42307D",
        main: "#42307D",
        darks: "#191A15",
        black: "#181D27",
        secondary: "#414651",
        light: "#535862",
      },
      boxShadow: {
        custom:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        table: "0px 1px 2px -1px #0a0d121a, 0px 1px 3px 0px #0a0d121a",
      },
    },
  },
  plugins: [],
};
