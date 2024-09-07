/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        falling: {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(500px)' },
        },
        moveBg: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        borderGrow: {
          '0%': { borderWidth: '0' },
          '100%': { borderWidth: '2px' },
        },
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite',
        falling: 'falling 6s ease-in infinite',
        moveBg: 'moveBg 6s infinite linear',
      },
      colors:{
        customGreen : '#1A7361', 

      },
      animation: {
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
  },
  plugins: [],
}
  }}