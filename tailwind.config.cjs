/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'signika' : ['Signika', 'serif'],
      'merri' : ['Merriweather', 'serif'],
      'mukta' : ['MuktaVaani', 'serif']
    }
  },
  plugins: [],
}
