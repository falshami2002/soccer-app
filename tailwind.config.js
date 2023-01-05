/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'soccer-pattern': "url('https://t3.ftcdn.net/jpg/01/13/49/82/360_F_113498271_Arb4VgIstIcPgxUOTQfhjZg9FK8a9HvA.jpg')",
        'soccer-ball-pattern': "url('https://img.freepik.com/premium-photo/soccer-ball-hexagon-background-black-white-football-pattern-3d-rendering_601748-23010.jpg?w=2000')",
        'soccer-league' : "url('https://uclbranding.uefa.com/assets/img/carousel-1.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
],
}
