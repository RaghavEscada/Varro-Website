import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        dark: '#03092E',
        'dark-secondary': '#0C1128',
        'dark-tertiary': '#0C1236',
        accent: '#0AAAA8',
        'text-light': '#E5E7F8',
        'text-gray': '#626262',
        'text-gray-light': 'rgba(229, 231, 248, 0.6)',
        'bg-overlay': 'rgba(3, 9, 46, 0.2)',
        'bg-overlay-light': 'rgba(3, 9, 46, 0.15)',
        divider: 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        primary: ['var(--font-montserrat)', 'sans-serif'],
        secondary: ['var(--font-inter)', 'sans-serif'],
        display: ['Abhaya Libre', 'serif'],
        abhaya: ['Abhaya Libre', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        serif: ['Playfair Display', 'serif'],
      },
      maxWidth: {
        container: '1920px',
      },
    },
  },
  plugins: [],
}
export default config

