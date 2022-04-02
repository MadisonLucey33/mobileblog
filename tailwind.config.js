module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      boxShadow: {
        '10xl': '4.2px 8.5px 8.5px hsl(0deg 0% 0% / 0.37);',
      }
    },
    minWidth: {
     
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
     
    },
  },
  variants: {
    extend: {},
    screens: {
      'sm': '640px',  // maybe phone idk idk
      'md': '768px', //tablet
      'lg': '1024px', // different sized laptop bad view
      'xl': '1280px', // adjusts the coder monitor I THINK THIS WoRKS
      '2xl': '1440px', // adjusts the regular monitor viewsonic //large laptop   I THINK IT WORKS
      '3xl': '1536px',  // I THINK IT WORKS
      '4xl': '1760px', // regular monitor?  I THINK IT WORkS
     
    }
  },
  plugins: [],

};
