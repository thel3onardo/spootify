import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1ED760',
        gray: {
          50: '#f6f6f6',
          100: '#FEFEFE',
          300: '#2f2e2d',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#252525',
          850: '#232323',
          900: '#2a2a2a',
          950: '#121212',
        },
      },
      boxShadow: {
        card: '0px 2rem 20rem 0px rgba(30,215,96, 0.2)',
      },
    },
  },
  plugins: [],
};
