//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'noto': ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        'neutral': {
          '0': 'hsl(200, 60%, 99%)',
          '100': 'hsl(0, 0%, 93%)',
          '200': 'hsl(217, 61%, 90%)',
          '300': 'hsl(0, 0%, 78%)',
          '600': 'hsl(226, 11%, 37%)',
          '700': 'hsl(225, 23%, 24%)',
          '800': 'hsl(226, 25%, 17%)',
          '900': 'hsl(227, 75%, 14%)',
        },
        'red': {
          '400': 'hsl(3, 86%, 64%)',
          '500': 'hsl(3, 71%, 56%)',
          '700': 'hsl(3, 77%, 44%)',
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)',
        'gradient-dark': 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      },
    },
  },
  plugins: [],
}