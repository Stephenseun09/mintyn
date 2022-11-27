/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          dark: "#0f172abf",
          blue: "#1875F0",
          deepBlue: "#012A7A",
        },
        secondary: {
          light: "#F9F9FB",
          lightGray: "#F9F9FB",
          gray: "#E5E5E5",
          DEFAULT: "#F9F9FB",
          dark: "#333333",
        },
        paragraph: {
          DEFAULT: "#373435",
          dark: "#0f172abf",
        },
        greyBlue: "#647787",
      },
      backgroundColor: {
        primary: {
          blue: "#1875F0",
        },
        paragraph: "#000000",
      },
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
        segoe: ["'Segoe UI'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
