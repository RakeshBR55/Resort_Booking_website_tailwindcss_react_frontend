/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};