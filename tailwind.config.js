module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mobile-nav-bg': 'rgba(51, 65, 85, 0.95)',
        'default-background': '#060606',
        'default-background-opaque': 'rgba(6, 6, 6, 0.8)'
      },
      maxHeight: {
        '700': '700px'
      },
      height: {
        '700': '700px',
        '900': '900px',
        '28rem': '28rem',
        '270px': '270px',
        '450px': '450px',
        '576px': '576px',
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh'
      },
      width: {
        '576px': '576px',
        '432px': '432px',
        '320px': '320px',
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
      },
      top: {
        '40p': '40%'
      },
      outline: {
        "solid-white": ['1rem solid rgba(255, 255, 255, .75)', '16px']
      },
      padding: {
        '30rem': '30rem',
        '34rem': '34rem',
        '38rem': '38rem',
        '42rem': '42rem',
      },
      screens: {
        '3xl': '1700px',
        '4xl': '2000px'
      }
    },
  },
  variants: {
    extend: {
      zIndex: ['hover', 'active'],
      outline: ['hover', 'active'],
      transitionProperty: ['hover', 'focus'],
      scale: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
};