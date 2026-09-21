/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./404.html",
    "./tyt/**/*.html",
    "./lgs/**/*.html",
    "./kpss/**/*.html",
    "./blog/**/*.html",
    "./android/**/*.html",
    "./ios/**/*.html",
    // ⚡2026-09-21: `ayt` klasörü listede HİÇ YOKTU — o sayfanın sınıfları
    // purge ediliyordu. Yasal sayfalar da eklendi.
    "./ayt/**/*.html",
    "./privacy/**/*.html",
    "./terms/**/*.html",
    "./delete-account/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#faf7fc',
          100: '#f3edf7',
          200: '#e8ddf0',
          300: '#d4c4e3',
          400: '#b89fd0',
          500: '#9b7cb8',
          600: '#8464a6',
          700: '#6f5190',
          800: '#5c4378',
          900: '#4a3662',
        }
      }
    }
  },
  plugins: [],
}
