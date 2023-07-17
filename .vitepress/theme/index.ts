import { h } from 'vue'
import Theme from 'vitepress/theme'
import Sponsors from './components/sponsors.vue'

import './styles/vars.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(Sponsors),
    })
  },
}
