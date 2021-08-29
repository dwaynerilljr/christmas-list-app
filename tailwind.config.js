module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'christmas-red': '#e40a2d',
        'christmas-green': '#165b33',
        'christmas-green-300': '#0f4024',
        'christmas-red-300': '#a0071f'
      },
      fontFamily: {
        'marker': ["'Permanent Marker', 'cursive'"]
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
