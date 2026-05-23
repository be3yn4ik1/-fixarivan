/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dce6f0',
          200: '#b3cce0',
          300: '#80aac9',
          400: '#4d87b2',
          500: '#2b6491',
          600: '#1e4d72',
          700: '#163a56',
          800: '#0f2a3d',
          900: '#0a1c29',
          950: '#060f17',
        },
      },
      boxShadow: {
        soft: '0 2px 20px rgba(0,0,0,0.06)',
        card: '0 4px 24px rgba(0,0,0,0.08)',
        lifted: '0 8px 40px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
