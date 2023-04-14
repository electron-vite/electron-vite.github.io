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
        text: 'Introduction',
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
          { text: 'Vite-plugin-electron', link: '/plugin/vite-plugin-electron' },
          { text: 'Vite-plugin-electron-renderer', link: '/plugin/vite-plugin-electron-renderer' },
        ]
      },
      {
        text: 'Build',
        collapsed: false,
        items: [
          { text: 'electron-builder', link: '/build/electron-builder' },
        ]
      },
      {
        text: 'FAQ & Troubleshooting',
        collapsed: false,
        items: [
          { text: 'Troubleshooting', link: '/FAQ/issue' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Team', link: '/community/team' },
          { text: 'Acknowledge', link: '/community/development-contribution' },
          { text: 'Development and Contribution', link: '/community/acknowledge' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/electron-vite' }
    ]
  }
})
