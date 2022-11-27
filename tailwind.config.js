/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': { 'max': '1440px' },
      'laptopXL': { 'max': '1280px' },
      'laptop': { 'max': '1024px' },
      'tabletL': { 'max': '820px' },
      'tabletM': { 'max': '640px' },
      'mobileL': { 'max': '425px' },
      'mobileM': { 'max': '375px' },
      'mobileS': { 'max': '320px' },
    },
    extend: {
      animation: {
        'fadeIn': 'FadeIn .3s ease-in-out'
      },
      keyframes: {
        FadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
