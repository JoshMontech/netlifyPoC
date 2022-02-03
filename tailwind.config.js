module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '450px',
      sm: '600px',
      md: '768px',
      lg: '900px',
      xl: '1100px',
      xxl: '1440px'
    },
    fontFamily: {
      signika: ['Signika', 'sans-serif'],
      sans: ['"Open Sans"', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      transitionProperty: {
        'max-h': 'max-height'
      },
      colors: {
        'ecp-pink': '#e50085',
        'ecp-lightblue': '#20b4e7',
        'ecp-darkblue': '#18506f',
        'ecp-lightgrey': '#f0f0f0',
        'ecp-bg-lightblue': '#f1fbff',
        'white': '#ffffff',
        'black': '#000000'
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'footer': '1fr 1fr 2fr',
      }
    },
  },
  plugins: [],
}
