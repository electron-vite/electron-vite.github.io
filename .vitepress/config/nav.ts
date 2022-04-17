import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Overview',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },

      { text: 'Configuration', link: '/guide/configuration' },
      { text: 'File Structure', link: '/guide/configuration/file-structure' },
      { text: 'Main Process', link: '/guide/configuration/main' },
      { text: 'Renderer Process', link: '/guide/configuration/renderer' },
      { text: 'Preload Script', link: '/guide/configuration/preload' },

      // { text: 'Migration', link: '/guide/migration' },

      { text: 'Development', link: '/development/' },
      { text: 'Importing Images', link: '/development/importing-images' },
      { text: 'Import Third-party Libraries', link: '/development/import-third-party-libraries' },
      { text: 'Node Integration', link: '/development/node-integration' },
      { text: 'dependencies vs devDependencies', link: '/development/dependencies-vs-devDependencies' },
      { text: 'Node Addon APIs In Main Process', link: '/development/addon-apis-in-main-process' },
      { text: 'Debuging', link: '/development/debugging' },

      { text: 'Testing', link: '/testing/' },
      { text: 'E2E Testing', link: '/testing/e2e' },
      { text: 'Vitest Testing', link: '/testing/vitest' },

      { text: 'Build', link: '/build/' },
      { text: 'Publish', link: '/build/publish' },

      { text: 'CI/CD', link: '/ci-cd/' },
      { text: 'GitHub Actions', link: '/ci-cd/github-actions' },

      { text: 'Other', link: '/other/' },
      { text: 'Q&A', link: '/other/qa' },
      { text: 'Release Note', link: '/other/release-note' },
      { text: 'Contributing', link: '/other/contributing' },
      { text: 'Sponsor', link: '/other/sponsor' },
    ],
  },
  {
    text: 'Plugin',
    items: [
      { text: 'Plugin', link: '/plugin/' },
    ],
  },
  { text: 'Play', link: '/play' },
]
