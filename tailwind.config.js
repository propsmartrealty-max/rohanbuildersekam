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
          250: '#E6DFC',
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
        },
        river: {
          500: '#155E75',
          600: '#0E7490',
          700: '#164E63',
          800: '#083344',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'warm-shimmer': 'linear-gradient(135deg, #F5F2EB 0%, #FAF8F5 50%, #ECE6DC 100%)',
        'espresso-gradient': 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
      }
    },
  },
  plugins: [],
};
