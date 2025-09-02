/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#C6A87D',
          dark: '#1A1A1A',
          light: '#F5F5F5',
          accent: '#9C8B7A',
          muted: '#6B6B6B'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
};