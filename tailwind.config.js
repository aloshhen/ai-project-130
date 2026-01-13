export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#1A1A1A',
        'coffee-light': '#F5F5F5',
        'coffee-accent': '#8B4513',
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(135deg, #2C1810 0%, #5D4037 100%)',
      },
      animation: {
        'coffee-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}