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
          { text: 'Electron-builder', link: '/Build/Electron-builder' },
          { text: 'PackagingStaticResource', link: '/Build/PackagingStaticResource' },
        ]
      },
      {
        text: 'Electron',
        collapsed: false,
        items: [
          { text: 'Render Process Use Nodejs', link: '/Electron/RenderProcessUseNodejs' },
          { text: 'Multiple Programs Windows', link: '/Electron/MultipleProgramsWindows' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: 'Issue', link: '/Troubleshooting/Issue' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Team', link: '/Community/team' },
          { text: 'Development And Contribution', link: '/Community/development-contribution' },
          { text: 'Acknowledge', link: '/Community/acknowledge' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/electron-vite' }
    ]
  }
})
