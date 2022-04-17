module.exports = {
  content: ['./.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#AD49FE',
          50: '#9863FF',
          100: '#9C5EFF',
          200: '#A059FF',
          300: '#A453FF',
          400: '#A84EFF',
          500: '#AD49FE',
          600: '#B144FE',
          700: '#B53EFE',
          800: '#B939FE',
          900: '#BD34FE',
        },
        dark: {
          50: '#4A4A4A',
          100: '#3C3C3C',
          200: '#323232',
          300: '#2D2D2D',
          400: '#222222',
          500: '#1F1F1F',
          600: '#1C1C1E',
          700: '#1B1B1B',
          800: '#181818',
          900: '#0F0F0F',
        },
        light: {
          50: '#FDFDFD',
          100: '#FCFCFC',
          200: '#FAFAFA',
          300: '#F8F9FA',
          400: '#F6F6F6',
          500: '#F2F2F2',
          600: '#F1F3F5',
          700: '#E9ECEF',
          800: '#DEE2E6',
          900: '#DDE1E3',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#5AAFFF',
              textDecoration: 'none',
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
            pre: { color: 'inherit', fontSize: '.9rem' },
            thead: { color: 'inherit' },
            blockquote: { color: 'inherit' },
            table: {
              borderCollapse: 'collapse',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}