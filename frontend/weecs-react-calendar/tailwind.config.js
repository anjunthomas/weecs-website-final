/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}" 
  ],
  theme: {
  extend: {
    textShadow: {
      glow: '0 0 2px #c084fc, 0 0 4px #c084fc, 0 0 7px #9333ea',
    }
  }
},
  plugins: [
    require('tailwindcss-textshadow')
  ],
}