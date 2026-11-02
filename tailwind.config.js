/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern River Cyan & Teal (Replacing old beige/gold)
        cyan: {
          50: '#F0FDFF',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#06B6D4', // Primary Electric River Cyan
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          950: '#083344',
        },
        // Liquid Platinum & Cool Silver
        silver: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Deep Obsidian Space
        dark: {
          950: '#030712',
          900: '#0B0F17',
          850: '#101622',
          800: '#162032',
          750: '#1C293F',
          700: '#24344E',
        },
        // River Emerald
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          900: '#064E3B',
          950: '#022C22',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'cyan-glow': 'linear-gradient(135deg, #38BDF8 0%, #06B6D4 50%, #0284C7 100%)',
        'silver-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)',
        'emerald-cyan': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(22, 32, 50, 0.75) 0%, rgba(11, 15, 23, 0.85) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        flowWind: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        flowWind: 'flowWind 2.5s linear infinite',
      }
    },
  },
  plugins: [],
};
