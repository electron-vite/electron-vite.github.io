import './styles/index.css'
import './styles/vars.css'
import type { Theme } from 'vitepress'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default <Theme> {
  Layout,
  NotFound,
}
