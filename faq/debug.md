# Debug

::: tip Note
If the IDE you are using is VSCode, you can directly use the existing [template](/guide/templates) project.
:::

## Pass args

```ts
// vite.config.ts
import electron from 'vite-plugin-electron'

export default {
  plugins: [
    electron({
      entry: 'electron/main/index.ts',
      onstart({ startup }) {
        startup([
          '.',
          '--no-sandbox',
          '--sourcemap',
          // For Chrome devtools
          '--remote-debugging-port=9222',
        ])
      },
    }),
  ],
}
```
