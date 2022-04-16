module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}