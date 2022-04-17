import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { metaData } from './config/constants'
import head from './config/head'
import themeConfig from './config/themeConfig'
import { mdRenderFilename } from './config/markdown'

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: metaData.title,
  description: metaData.description,
  head,
  themeConfig,
  markdown: {
    config(md) {
      md.use(mdRenderFilename)
    },
  },
})
