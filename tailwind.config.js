/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        whiteGray:'#f5f5f5',
        lightGray:'#8c92ac',
        darkGray:'#205072',
        Gainsboro:'#DDDDDD'
      },
      border:{
        1:'1px'
      }
    },
  },
  plugins: [],
}
