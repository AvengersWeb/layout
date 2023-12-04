/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.{js.jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Stint Ultra Expanded'],
        secondary: ['Poppins'],
      },
      colors: {
        primary: '#ff6363',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
