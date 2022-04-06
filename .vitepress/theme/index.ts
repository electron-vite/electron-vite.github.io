import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default <Theme> {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = tag => tag === 'preview-box'
  },
}
