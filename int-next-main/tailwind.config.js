/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './Comps/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#248599',
      white: '#fff',
      black: '#000',
      qu: '#1C2221',
      button: '#165879',
      dark: '#232324',
      graytext: '#677674',
      nav: '#2786ab',
      hide: '#238d9e',
      b: '#22CDCA',
      bl: '#00778A',
      yellow: 'yellow',
      red: '#F00',
      blue: '#00f',
      green: '#0f0',
    },
    screens: {
      mobile: '290px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
