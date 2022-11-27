/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          dark: "#0f172abf",
          blue: "#1F56C3",
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
      },
      backgroundColor: {
        primary: {
          blue: "#1F56C3",
        },
        paragraph: "#000000",
      },
      fontFamily: {
        primary: ["'Poppins'", "sans-serif"],
        secondary: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
