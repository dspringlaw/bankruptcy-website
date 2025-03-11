/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a2463', // Navy blue
          light: '#1e3a7b',
          dark: '#051c4e',
        },
        secondary: {
          DEFAULT: '#e5e7eb', // Light gray
          dark: '#d1d5db',
        },
        accent: {
          DEFAULT: '#3b82f6', // Blue
          light: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}