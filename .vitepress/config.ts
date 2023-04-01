import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electron ⚡️ Vite",
  description: "Creating desktop programs using Electron and vite",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/Guide/what-is-electronVite' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'what is electron vite', link: '/Guide/what-is-electronVite' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Acknowledge', link: '/Community/Acknowledge' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
