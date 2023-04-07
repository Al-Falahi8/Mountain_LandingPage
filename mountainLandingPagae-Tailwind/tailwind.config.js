/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'light-blue': '#0077FF',
        'dark-black': '#000000',
        'light-white': '#FFFFFF',
      },
      fontFamily: {
        headingFontFamily: ['headingFontFamily'],
        bodyFontFamily: ['bodyFontFamily'],
      },
    },
  },
  plugins: [],
}