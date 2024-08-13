/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        50: 'hsl(0, 72%, 100%)',
        100: 'hsl(0, 72%, 90%)',
        200: 'hsl(0, 72%, 80%)',
        300: 'hsl(0, 72%, 68%)',
        400: 'hsl(0, 72%, 57%)',
        500: 'hsl(0, 72%, 52%)',
        600: 'hsl(0, 72%, 42%)',
        700: 'hsl(0, 72%, 30%)',
        800: 'hsl(0, 72%, 20%)',
        900: 'hsl(0, 72%, 10%)',
        950: 'hsl(0, 72%, 0%)',
      },
      'secondary': {
        50: 'hsl(0, 0%, 100%)',
        100: 'hsl(0, 0%, 90%)',
        200: 'hsl(0, 0%, 78.5%)',
        250: 'hsl(0, 0%, 70%)',
        300: 'hsl(0, 0%, 60%)',
        400: 'hsl(0, 0%, 50%)',
        500: 'hsl(0, 0%, 40%)',
        600: 'hsl(0, 0%, 30%)',
        700: 'hsl(0, 0%, 15%)',
        800: 'hsl(0, 0%, 10.5%)',
        900: 'hsl(0, 0%, 8%)',
        950: 'hsl(0, 0%, 0%)',
      },
    },
    fontFamily:{
      heading: ['Montserrat',"sans-serif"],
      par: ['Lato', "sans-serif"],
      sans: ['sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

