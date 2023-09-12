/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        primary: '#1ED760',
        grey: {
          100: '#FEFEFE',
          800: '#252525',
          900: '#232323',
        },
      },
    },
  },
  plugins: [],
};
