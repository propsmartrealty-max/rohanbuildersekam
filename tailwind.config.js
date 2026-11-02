/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FCFAF7',
          100: '#F7F4EE',
          150: '#F5F2EB', // Signature Warm Architectural Beige
          200: '#ECE6DC',
          250: '#E6DFD4',
          300: '#DDD4C4',
          400: '#C8BCA7',
          500: '#AD9D84',
          600: '#8E7D65',
          700: '#6F604D',
          800: '#524638',
          900: '#382F25',
          950: '#231D17',
        },
        stone: {
          850: '#201D1A',
          900: '#1C1917',
          950: '#0C0A09',
        },
        bronze: {
          400: '#B8860B',
          500: '#996515',
          600: '#7B4E0A',
          700: '#5C3806',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        blobDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        glassShimmer: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        flowWind: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        blob: 'blobDrift 14s ease-in-out infinite',
        shimmer: 'glassShimmer 3.5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        flowWind: 'flowWind 2.5s linear infinite',
      }
    },
  },
  plugins: [],
};
