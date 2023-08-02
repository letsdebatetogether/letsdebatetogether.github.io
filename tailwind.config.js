/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "black_font" : "#0E0D1A",
        "light_blue_button" : "#B2B7D8",
        "white_font" : "#CCCDD9",
        "dark_blue_button" : "#4A4C59",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT : "0rem",
        sm : "1rem",
        md : "2rem",
        lg : "3rem",
        xl : "4rem",
        '2xl' : "6rem",
        '3xl' : "9rem",
      },
    },
    screens: {
      sm: "640px",
      md: "730px",
      lg: "900px",
      xl: "1100px",
      '2xl' : "1336px",
      '3xl' : "1600px"
    }
  },
  
  plugins: [],
};

