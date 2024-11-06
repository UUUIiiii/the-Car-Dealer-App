/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          // Main color
        lightBlue: '#D7EBFF',
        buttonPurple: '#9B8FF3'
      },
      boxShadow: {
        primaryBtnActive: 'inset -5px 5px 50px 0 rgba(255, 255, 255, 0.7)',
        shadowPrimaryBtn: '-5px 5px 36.7px 0px rgba(0, 0, 0, 0.25) inset',
      }
    },
  },
  plugins: [],
};
