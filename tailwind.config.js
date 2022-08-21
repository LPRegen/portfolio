/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary-bg': '#FFF7F0',
      'hover-color': '#dfe0df',
      'primary-text': '#2f4858',
      'secondary-text': '#535c78',
      'cta-color': '#D97738',
    },
    extend: {},
  },
  plugins: [],
};
