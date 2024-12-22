/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7E2',
        charcoal: '#474747',
        forest: '#3A643B',
        golden: '#FFD700',
        lightGray: '#D8D8D8',
        lightGreen: '#EAF2EA',
        'custom-dark': 'rgba(51, 53, 72, 0.5)',
      },
      inset: {
        '18': '120px',
      },
      fontWeight: {
        '600': 600
      },
    },
  },
  plugins: [],
}

