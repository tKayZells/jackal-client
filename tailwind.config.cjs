const colors = require("tailwindcss/colors")

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
    colors: {
      white: colors.white,
      black: colors.black,
      // All color visualization
      //https://uicolors.app/edit?sv1=cararra:50-f9f9f7/100-f5f5f2/200-e8e8e0/300-d7d7ca/400-bebeab/500-a5a58e/600-8e8e74/700-757560/800-636351/900-555547;bombay:50-e3e3e3/100-e3e3e3/200-dbdbdb/300-c9c9c9/400-b5b5b5/500-a6a6a6/600-8f8f8f/700-7a7a7a/800-616161/900-4f4f4f;clay:50-f5f7fa/100-ebeef3/200-d2dbe5/300-aabccf/400-7c98b4/500-5c7c9b/600-486381/700-3b5069/800-344458/900-26303d;mahogany:50-fdf5f3/100-fceae7/200-f9d4d2/300-f3b2ae/400-ec8380/500-e05453/600-d04046/700-ab252e/800-90212c/900-7b202c;palmas:50-fdffe6/100-f8fdca/200-f0fb9b/300-e1f660/400-cbe921/500-b1d111/600-8aa709/700-677f0c/800-526410/900-455512
      'cararra': {
        '50': '#f9f9f7',
        '100': '#f5f5f2',
        '200': '#e8e8e0',
        '300': '#d7d7ca',
        '400': '#bebeab',
        '500': '#a5a58e',
        '600': '#8e8e74',
        '700': '#757560',
        '800': '#636351',
        '900': '#555547',
      },
      'bombay': {
        '50': '#e3e3e3',
        '100': '#e3e3e3',
        '200': '#dbdbdb',
        '300': '#c9c9c9',
        '400': '#b5b5b5',
        '500': '#a6a6a6',
        '600': '#8f8f8f',
        '700': '#7a7a7a',
        '800': '#616161',
        '900': '#4f4f4f',
      },
      'clay': {
        '50': '#f5f7fa',
        '100': '#ebeef3',
        '200': '#d2dbe5',
        '300': '#aabccf',
        '400': '#7c98b4',
        '500': '#5c7c9b',
        '600': '#486381',
        '700': '#3b5069',
        '800': '#344458',
        '900': '#26303d',
      },
      'mahogany': {
        '50': '#fdf5f3',
        '100': '#fceae7',
        '200': '#f9d4d2',
        '300': '#f3b2ae',
        '400': '#ec8380',
        '500': '#e05453',
        '600': '#d04046',
        '700': '#ab252e',
        '800': '#90212c',
        '900': '#7b202c',
      },
      'palmas': {
        '50': '#fdffe6',
        '100': '#f8fdca',
        '200': '#f0fb9b',
        '300': '#e1f660',
        '400': '#cbe921',
        '500': '#b1d111',
        '600': '#8aa709',
        '700': '#677f0c',
        '800': '#526410',
        '900': '#455512',
      },
    }
  },
  plugins: [],
}
