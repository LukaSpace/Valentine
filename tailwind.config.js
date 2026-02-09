/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'walk': 'walk 10s linear forwards',
        'bounce': 'bounce 2s infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'explode': 'explode 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        explode: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}