/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat" : ['Montserrat', 'sans-serif']
      },
      colors: {
        "primary": "#01BAAE",
        "textcolor": "#272341"
      }
    },
  },
  plugins: [],
};
