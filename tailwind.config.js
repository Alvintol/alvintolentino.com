module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ['./src/**/*.js', './src/*.js', './src/**/**/*.js'],
  preserveHtmlElements: false,
  purge: [],
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
  variants: {},
  plugins: [],
}