module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mobile-nav-bg': 'rgba(51, 65, 85, 0.6)',
        'default-background': '#060606',
        'default-background-opaque': 'rgba(6, 6, 6, 0.5)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};