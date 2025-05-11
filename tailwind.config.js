/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#d9e3f1',
          200: '#b3c7e3',
          300: '#8eabd5',
          400: '#688fc7',
          500: '#4273b9',
          600: '#355c94',
          700: '#28446f',
          800: '#1c2e49',
          900: '#1A2C48',
        },
        secondary: {
          50: '#f2f9f9',
          100: '#e6f3f3',
          200: '#bfe0e2',
          300: '#99ccd0',
          400: '#4d9fa8',
          500: '#00727f',
          600: '#006772',
          700: '#00565f',
          800: '#00444c',
          900: '#00353d',
        },
        accent: {
          50: '#fcf9eb',
          100: '#f9f2d7',
          200: '#f3e5af',
          300: '#edd987',
          400: '#e7cc5f',
          500: '#D4AF37', // Gold accent
          600: '#aa8c2c',
          700: '#7f6921',
          800: '#554616',
          900: '#2a230b',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      boxShadow: {
        'sharp': '8px 8px 0px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};