/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'soccer-pattern': "url('https://media.istockphoto.com/id/1149826251/vector/football-soccer-pattern-background.jpg?s=612x612&w=0&k=20&c=lU-Fi8sK2rAyvmcfUsQdTR-FnoNiovZuxM6ZSRwXh1U=')",
      }
    },
  },
  plugins: [require('daisyui')],
}
