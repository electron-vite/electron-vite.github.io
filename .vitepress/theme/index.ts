import Theme from 'vitepress/theme'

import './styles/vars.css'

export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    console.log(app)
    console.log(router)
    console.log(siteData)
    // ...
  }
}
