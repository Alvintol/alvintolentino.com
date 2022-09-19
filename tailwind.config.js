/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  preserveHtmlElements: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
      }
    },
  },
  plugins: [],
}