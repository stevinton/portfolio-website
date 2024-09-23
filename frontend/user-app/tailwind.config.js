/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '30': '18rem',
        '40': '25rem'
      },
      height: {
        '30': '18rem',
        '40': '20rem'
      },
      margin: {
        '10': '2.5rem',
        '16': '4rem',
        '28': '7rem',
        '30': '10rem'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite reverse',
        'popUp': 'popUp 0.5s linear ease-out forwards',
      },
      keyframes: {
        popUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      dropShadow: {
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      borderColor: {
        'border': 'var(--border)', // Add this line
      },
      colors: {
        'background': 'var(--background)', // Ensure these are included as well
        'foreground': 'var(--foreground)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
