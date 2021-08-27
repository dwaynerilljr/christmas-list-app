module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'christmas-red': '#e40a2d',
        'christmas-green': '#165b33'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
