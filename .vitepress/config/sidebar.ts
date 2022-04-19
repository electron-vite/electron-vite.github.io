import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/plugin': [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/plugin/' },
        {
          text: 'vite-plugin-electron',
          link: '/plugin/vite-plugin-electron',
        },
        {
          text: 'vite-plugin-resolve',
          link: '/plugin/vite-plugin-resolve',
        },
      ],
    },
  ],
  '/': [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Configuration', link: '/guide/configuration/' },
        { text: 'File Structure', link: '/guide/configuration/file-structure' },
        { text: 'Main Process', link: '/guide/configuration/main' },
        { text: 'Renderer Process', link: '/guide/configuration/renderer' },
        { text: 'Preload Script', link: '/guide/configuration/preload' },
      ],
    },
    {
      text: 'Development',
      children: [
        { text: 'Overview', link: '/development/' },
        { text: 'Importing Images', link: '/development/importing-images' },
        { text: 'Import Third-party Libraries', link: '/development/import-third-party-libraries' },
        { text: 'Node Integration', link: '/development/node-integration' },
        { text: 'dependencies vs devDependencies', link: '/development/dependencies-vs-devDependencies' },
        { text: 'Node Addon APIs In Main Process', link: '/development/addon-apis-in-main-process' },
        { text: 'Debuging', link: '/development/debugging' },
      ],
    },
    {
      text: 'Testing',
      children: [
        { text: 'Overview', link: '/testing/' },
        { text: 'E2E Testing', link: '/testing/e2e' },
        { text: 'Vitest Testing', link: '/testing/vitest' },
      ],
    },
    {
      text: 'Building',
      children: [
        { text: 'Build', link: '/build/' },
        { text: 'Publish', link: '/build/publish' },
      ],
    },
    {
      text: 'CI/CD',
      children: [
        { text: 'Overview', link: '/ci-cd/' },
        { text: 'GitHub Actions', link: '/ci-cd/github-actions' },
      ],
    },
    {
      text: 'Other',
      children: [
        { text: 'Overview', link: '/other/' },
        { text: 'Q&A', link: '/other/qa' },
        { text: 'Release Note', link: '/other/release-note' },
        { text: 'Contributing', link: '/other/contributing' },
        { text: 'Sponsor', link: '/other/sponsor' },
      ],
    },
  ],
}
