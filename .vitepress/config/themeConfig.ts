import type { DefaultTheme } from 'vitepress'

import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: DefaultTheme.Config = {
  // TODO algolia apply
  algolia: {
    appId: '',
    apiKey: '',
    indexName: '',
  },
  repo: 'electron-vite/electron-vite',
  logo: '/assets/logo.svg',
  docsDir: '.',
  docsBranch: 'main',
  docsRepo: 'electron-vite/docs',
  editLinks: true,
  editLinkText: 'Suggest changes to this page',
  nav,
  sidebar,
}

export default themeConfig
