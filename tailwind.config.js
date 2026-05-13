/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#fff4ed',
          100: '#ffe6d3',
          200: '#ffc9a0',
          400: '#fb8c3b',
          500: '#f97316',
          600: '#ea6b0a',
          700: '#c2530a',
        },
        charcoal: {
          50:  '#f5f5f4',
          100: '#e8e7e5',
          200: '#d1cfcc',
          300: '#b8b5b0',
          400: '#9a9792',
          500: '#76726d',
          600: '#5a5754',
          700: '#3d3b38',
          800: '#2a2825',
          900: '#1a1815',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
