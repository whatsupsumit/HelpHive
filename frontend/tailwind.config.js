import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'helphive-orange': '#F57C00',
        'helphive-yellow': '#FFC107',
        'charcoal': '#212121',
        'charcoal-light': '#424242',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    scrollbar({ nocompatible: true }),
  ],
}
