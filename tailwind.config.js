/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'primary': '#506F7F',
      'primary-50': '#506F7F50',
      'primary-75': '#506F7F75',
      'secondary': '#212932',
      'secondary-75': 'rgba(33, 41, 50, .75)',
      'secondary-95': 'rgba(33, 41, 50, .95)',
      'tertiary': '#ff49db',
      'quaternary': '#ff7849',
      'text-color': '#fff',
      'white': '#fff',
      'black': '#000',
      'transparent': 'transparent',
    },
    fontFamily: {
      text: ['Open Sans', 'sans-serif'],
      title: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'projetos-bg': "linear-gradient(to right bottom, rgba(33, 41, 50, .75), rgba(33, 41, 50, .75)), url('/assets/images/projetos-bg-desktop.webp')",
        'contato-bg': "url('/assets/images/contato-bg.webp')",
      },
    },
  },
  plugins: [],
}

