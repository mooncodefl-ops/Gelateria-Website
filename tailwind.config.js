/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F1E8',
        cream: '#FBF6EE',
        butter: '#F4E4C1',
        pistachio: '#A8B86B',
        'pistachio-dark': '#6B7B3F',
        terracotta: '#C67D5E',
        'terracotta-dark': '#A05A3E',
        cocoa: '#6B4226',
        espresso: '#2B1810',
        'espresso-light': '#4A2F22',
        berry: '#B5445E',
        'berry-light': '#D4708A',
        lemon: '#E8C547',
        peach: '#F2B88C',
        hazelnut: '#C9A57B',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'label': '0.25em',
        'label-wide': '0.4em',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
