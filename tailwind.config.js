/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#1c2826',
        'bgColorB': '#273633',
        'labelColorHover': '#546965',
        'labelColor': '#FDFFFC',
        'labelAqua': '#AAFAC8',
        'labelOrange': '#F49D6E',
        'cardsColor': '#5B2333',
        'cardsLabel': '#CED0CE',
      },
      fontFamily:{
        fontIBM: ['IBM Plex Sans'],
        fontGrotesk: ['Schibsted Grotesk'],
        fontHeebo: ['Heebo'],
        fontOswald: ['Oswald']
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
      }
    },
  },
  plugins: [
  ],
}

