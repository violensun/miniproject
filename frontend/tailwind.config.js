module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'fst' : '#21325E',
      'sec' : '#3E497A',
      'trd' : '#F1D00A',
      'fth' : '#F0F0F0',
      'midnight': '#121063',
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}