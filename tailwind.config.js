/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFCF7',
          100: '#FAF5EA',
          200: '#F2E6C8',
          300: '#E7D2A0',
          400: '#D9BC73',
          500: '#C5A553',
          600: '#A98939',
          700: '#836725',
          800: '#5F4918',
          900: '#3D2E0E',
        },
        dark: {
          950: '#06090D',
          900: '#0B0F15',
          850: '#111722',
          800: '#17202F',
          750: '#1E293B',
          700: '#26334A',
        },
        emerald: {
          950: '#04130E',
          900: '#09241B',
          800: '#123D2E',
          700: '#1B5642',
          600: '#267358',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #ECC880 0%, #C5A553 45%, #9B7B2B 85%, #ECC880 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(23, 32, 47, 0.75) 0%, rgba(11, 15, 21, 0.85) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        flowWind: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        flowWind: 'flowWind 3s linear infinite',
      }
    },
  },
  plugins: [],
};
