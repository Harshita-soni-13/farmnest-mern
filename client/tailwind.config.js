/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'header-bg-image': "url('/src/assets/header-img.png')",
      // 'card-bg-image':  "url('/src/assets/card-bg1.png')"
      },
      backgroundColor: {
        'custom-yellow': '#EDDD5E',
        'custum-gray': '#F8F7F0'
      }, 
      
    },
  },
  plugins: [],
}

