/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12rem',
        sm: '1.5rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
      },
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        cuba: ["Lobster Two", "sans-serif"],
        roboto: ["Jost", "sans-serif"],
      },
      colors: {
        'green-dark': '#032917',
        'green-mid': '#0F4A2D',
        'green-light': ' #425001',
        'yellow-light': '#C7EA00',
        'white-light': '#F7F7F7',
      },
      animation: {
        'grow-shrink': 'grow-shrink 2s infinite ease-in-out',
        'up-down': 'up-down 1.2s infinite ease-in-out',
      },
      keyframes: {
        'grow-shrink': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
});
