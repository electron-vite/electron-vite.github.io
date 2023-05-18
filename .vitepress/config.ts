import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electron ⚡️ Vite",
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
  base: '/docs/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/electron-vite.svg',
    nav: [
      { text: 'Guide', link: '/guide/why-electron-vite' },
      {
        text: 'Template', items: [
          {
            text: 'electron-vite-vue',
            link: 'https://github.com/electron-vite/electron-vite-vue'
          },
          {
            text: 'electron-vite-react',
            link: 'https://github.com/electron-vite/electron-vite-react'
          }
        ]
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Why Electron Vite', link: '/guide/why-electron-vite' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
      {
        text: 'Plugin',
        collapsed: false,
        items: [
          { text: 'Vite Plugin Electron', link: '/plugin/vite-plugin-electron' },
          { text: 'Vite Plugin Electron-renderer', link: '/plugin/vite-plugin-electron-renderer' },
        ]
      },
      {
        text: 'Build',
        collapsed: false,
        items: [
          { text: 'Electron Builder', link: '/build/electron-builder' },
          { text: 'Packaging Static Resource', link: '/build/packaging-static-resource' },
        ]
      },
      {
        text: 'Electron',
        collapsed: false,
        items: [
          { text: 'Render Process Use Nodejs', link: '/electron/render-process-use-nodejs' },
          { text: 'Multiple Programs Windows', link: '/electron/multiple-programs-windows' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: 'Issue', link: '/trouble-shooting/issue' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Development And Contribution', link: '/community/development-and-contribution' },
          { text: 'Acknowledge', link: '/community/acknowledge' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/electron-vite' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'MHLM0MHOBZ',
        apiKey: '9d4e29b666484f54feafbef08cac6754',
        indexName: 'electron-viteio'
    }
    }
  }
})
