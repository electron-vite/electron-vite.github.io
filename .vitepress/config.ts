import { defineConfig } from 'vitepress'
import { version } from '../package.json'
import head from './config/head'

export default defineConfig({
  title: 'UnoCSS',
  description: 'The instant on-demand atomic CSS engine.',
  head,
  themeConfig: {
    logo: '/logo.png',
    repo: 'unocss/unocss',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Integrations',
        items: [
          { text: 'Vite', link: '/integrations/vite' },
          { text: 'Nuxt', link: '/integrations/nuxt' },
          { text: 'Webpack', link: '/integrations/webpack' },
          { text: 'Runtime', link: '/integrations/runtime' },
        ],
      },
      {
        text: 'Presets',
        items: [
          { text: 'Uno', link: '/presets/uno' },
          { text: 'Mini', link: '/presets/mini' },
          { text: 'Wind', link: '/presets/wind' },
          { text: 'Icons', link: '/presets/icons' },
          { text: 'Attributify', link: '/presets/attributify' },
          { text: 'Typography', link: '/presets/typography' },
          { text: 'Web Fonts', link: '/presets/web-fonts' },
        ],
      },
      { text: 'Config', link: '/config/' },
      { text: 'Play', link: 'https://unocss.antfu.me/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/unocss/unocss/releases',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/unocss/unocss/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
    sidebar: {
      '/config': 'auto',
    },
  },
})
