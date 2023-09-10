import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electron⚡️Vite",
  description: "Creating desktop programs using Electron and vite",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/electron-vite.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'electron-vite.png' }],

    [
      'meta',
      { name: 'electron-vite', content: 'Creating desktop programs using Electron and vite' },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/electron-vite.svg',
    nav: [
      { text: 'Guide', link: '/guide/why-electron-vite' },
      {
        text: 'Examples',
        link: 'https://github.com/caoxiemeihao/electron-vite-samples',
      },
      {
        text: 'Template', items: [
          {
            text: 'electron-vite-vue',
            link: 'https://github.com/electron-vite/electron-vite-vue'
          },
          {
            text: 'electron-vite-react',
            link: 'https://github.com/electron-vite/electron-vite-react'
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Why Electron⚡️Vite', link: '/guide/why-electron-vite' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Features', link: '/guide/features' },
          { text: 'Core Plugins', link: '/guide/core-plugins' },
          { text: 'C/C++ Addons', link: '/guide/cpp-addons' },
          { text: 'Dependency Pre-Bundling', link: '/guide/dependency-pre-bundling' },
          { text: 'Preload Code Not Split', link: '/guide/preload-not-split' },
          { text: 'Not Bundle', link: '/guide/not-bundle' },
          { text: 'Env Variables', link: '/guide/env-variables' },
          { text: 'Static Resource', link: '/guide/static-resource' },
          { text: 'Templates', link: '/guide/templates' },
          { text: 'Examples 🚀', link: '/guide/examples' },
        ],
      },
      /* {
        text: 'Build',
        collapsed: false,
        items: [
          { text: 'Electron Builder', link: '/build/electron-builder' },
        ],
      }, */
      {
        text: 'FAQ',
        collapsed: false,
        items: [
          { text: 'Electron Forge', link: '/faq/electron-forge' },
          { text: 'dependencies vs devDependencies', link: '/faq/dependencies' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/sRqjYpEAUK' },
      { icon: 'github', link: 'https://github.com/electron-vite' }
    ],
    // @ts-ignore
    search: {
      provider: 'algolia',
      options: {
        appId: 'MHLM0MHOBZ',
        apiKey: '9d4e29b666484f54feafbef08cac6754',
        indexName: 'electron-viteio'
      },
    },
  },
})
