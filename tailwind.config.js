/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
        syne: ["Syne", "sans-serif"],
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      grey: {
        5: "#FFFFFF",
        10: "#16161580",
        15: "#626262",
        20: "#1A1A1A",
      },
      yellow: "#F07E15",
    },
  },
  plugins: [],
};
