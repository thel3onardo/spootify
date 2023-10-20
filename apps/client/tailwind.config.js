/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#1ED760',
        gray: {
          100: '#FEFEFE',
          500: '#b3b3b3',
          800: '#252525',
          850: '#232323',
          900: '#181818',
          950: '#121212',
        },
      },
    },
  },
  plugins: [],
};
