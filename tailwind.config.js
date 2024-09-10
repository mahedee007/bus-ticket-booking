/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {

    fontFamily:{
      body : ["Raleway", "sans-serif"],
      paragraph: ["Inter", "sans-serif"]

    },
    extend: {
      colors:{
        primary: '#1DD100',
       
      },
     backgroundImage:{
      hero: "url('images/banner.png')",
     } ,
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

