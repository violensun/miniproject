module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'fst' : '#21325E',
      'sec' : '#FFDD00',
      'trd' : '#FEF0CA',
      'fth' : '#9F6E53',
      'midnight': '#121063',
      'maincon' : '#FEF0CA',
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}