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
  markdown:{
    lineNumbers:true,
  },

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
          { text: 'Why Electron Vite', link: '/Guide/why-electron-vite' },
          { text: 'Getting Started', link: '/Guide/getting-started' },
        ]
      },
      {
        text: 'Plugin',
        collapsed: false,
        items: [
          { text: 'Vite-plugin-electron', link: '/Plugin/vite-plugin-electron' },
          { text: 'Vite-plugin-electron-renderer', link: '/Plugin/vite-plugin-electron-renderer' },
        ]
      },
      {
        text: 'Build',
        collapsed: false,
        items: [
          { text: 'electron-builder', link: '/Build/electron-builder' },
        ]
      },
      {
        text: 'Electron',
        collapsed: false,
        items: [
          { text: 'RenderingProcessNodejs', link: '/Electron/RenderingProcessNodejs' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: '-', link: '/Troubleshooting/-' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Team', link: '/Community/team' },
          { text: 'Acknowledge', link: '/Community/development-contribution' },
          { text: 'Development and Contribution', link: '/Community/acknowledge' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/electron-vite' }
    ]
  }
})
