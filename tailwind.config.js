/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0B0B0F',
          800: '#121217',
          700: '#1A1A20',
        },
        violet: {
          400: '#C084FC',
          500: '#9B5CFF',
          600: '#B06CFF',
        },
        ember: {
          400: '#FF6B8A',
          500: '#FF4D6D',
          600: '#FF5C8A',
        },
        mist: '#9CA3AF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #9B5CFF 0%, #FF4D6D 100%)',
        'grad-soft': 'linear-gradient(135deg, rgba(155,92,255,0.15) 0%, rgba(255,77,109,0.15) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(155,92,255,0.35)',
        'glow-ember': '0 0 40px -10px rgba(255,77,109,0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
