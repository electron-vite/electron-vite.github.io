import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      '.vitepress/theme/**/*.{ts,vue}',
    ],
  },
  safelist: [
    'pb-5',
    'logo-float-xl',
    'dark:text-white',
    'opacity-85',
  ],
  shortcuts: {
    'logo-float-xl': 'text-6xl m-2 mr-6 float-right',
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: {
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
  plugins: [
    typography(),
  ],
})
