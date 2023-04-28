/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      height: {
        screen: 'var(--100vh, 100vh)'
      },
      minHeight: {
        screen: 'var(--100vh, 100vh)'
      },
      maxHeight: {
        screen: 'var(--100vh, 100vh)'
      }
    },
    colors: {
      bgColor: '#161616',
      white: '#FFFFFF',
      grey: {
        light: "#8A8A8A"
      }
    }
  },
  fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
    nordique: ['nordique', 'roboto']
  },
  plugins: [],
}
