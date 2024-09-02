/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:"50px",
        md:"100px",
        lg:"200px",
        xl:"400px",
        xxl:"3200px",
      },
      colors:{
        primary:'#53A3E2',
        secondary:"#38709C",
        third:"#DDCFE8",
        fourth:"#9AE9ED"
      }
    },
  },
  plugins: [],
}