module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {  
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(1.2) rotate(-3deg)' },
          '50%': { transform: ' scale(0.8) rotate(3deg)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(20deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(20deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'waving-hand': 'wave 1s linear infinite',
      },
    },
  },
  plugins: [],
}
